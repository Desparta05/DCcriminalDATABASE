const mongoose = require("mongoose")
const { parseFeed } = require('htmlparser2');
const puppeteer = require('puppeteer');
const db = require('./models');

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/db_dcComics",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

async function getVillainAttribute(url, attr, page, villainAttributePath, villainAttributeProperty)
{
    var villainAttribute = '';
    
    var [el] = await page.$x(villainAttributePath)

    if(el != null) 
    {
        var xPathProperty = await el.getProperty(villainAttributeProperty).catch(console.log(url + " missing " + attr));
        villainAttribute = await xPathProperty.jsonValue();
    }

    return villainAttribute;
}

async function scrapeProduct(url) {

    var Image = '';
    var Name= '';
    var Alias = '';
    var Gender= '';
    var Height= '';
    var Weight= '';
    var EyeColor= '';
    var HairColor= '';
    var City= '';
    var Powers= '';
    var Description= '';

    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36")
    await page.goto(url, {timeout:0});
    

    // Scrap Image
    Image = await getVillainAttribute(url, 'image', page, '//*[@id="mw-content-text"]/div/aside/figure/a/img', 'src');
    
    // Scrap Name
    Name = await getVillainAttribute(url, 'name', page, '//*[@id="mw-content-text"]/div/aside/div[1]/div/a', 'textContent');

    // Scrape Alias
    Alias = await getVillainAttribute(url, 'alias', page, '//*[@id="mw-content-text"]/div/aside/div[2]/div', 'textContent');

    // Scrape Gender
    Gender = await getVillainAttribute(url, 'gender', page, '//*[@id="mw-content-text"]/div/aside/section[2]/div[1]/div/a', 'textContent');

    // Scrape Height
    Height = await getVillainAttribute(url, 'height', page, '//*[@id="mw-content-text"]/div/aside/section[2]/div[2]/div/span/a', 'textContent');
    
    // Scrape Weight
    Weight = await getVillainAttribute(url, 'weight', page, '//*[@id="mw-content-text"]/div/aside/section[2]/div[3]/div/span/a', 'textContent');

    // Scrape Eye Color
    EyeColor = await getVillainAttribute(url, 'eyecolor', page, '//*[@id="mw-content-text"]/div/aside/section[2]/div[4]/div/a', 'textContent');

    // Scrape Hair Color
    HairColor = await getVillainAttribute(url, 'haircolor', page, '//*[@id="mw-content-text"]/div/aside/section[2]/div[5]/div', 'textContent');

    // Scrape Base Of Operations
    City = await getVillainAttribute(url, 'city', page, '//*[@id="mw-content-text"]/div/aside/div[3]/div/a', 'textContent');

    // Scrape Powers and Abilities
    Powers = await getVillainAttribute(url, 'powers', page, '//*[@id="mw-content-text"]/div/ul[1]', 'textContent');

    // Scrape Description
    Description = await getVillainAttribute(url, 'description', page, '//*[@id="mw-content-text"]/div/p[3]', 'textContent');

    console.log({ Image, Name, Alias, Gender, Height, Weight, EyeColor, HairColor, City, Powers, Description });

    browser.close();
    db.Villains.create({ Image, Name, Alias, Gender, Height, Weight, EyeColor, HairColor, City, Powers, Description }).then(() => console.log("character created"))
}

// scrapeProduct('https://dc.fandom.com/wiki/Catwoman_(Selina_Kyle)');

var links = [
    "https://dc.fandom.com/wiki/Bedlam_(New_Earth)",
    "https://dc.fandom.com/wiki/Bedovian_(New_Earth)",
    "https://dc.fandom.com/wiki/Beelzebub_(New_Earth)",
    "https://dc.fandom.com/wiki/Bellerophon_(New_Earth)",
    "https://dc.fandom.com/wiki/Bellona_(New_Earth)",
    "https://dc.fandom.com/wiki/Belthera_(New_Earth)",
    "https://dc.fandom.com/wiki/Belyllioth_(New_Earth)",
    "https://dc.fandom.com/wiki/Benedict_Arnold_(New_Earth)",
    "https://dc.fandom.com/wiki/Benjamin_Asplin_(New_Earth)",
    "https://dc.fandom.com/wiki/Benjamin_Bloch_(New_Earth)"
]

links.forEach(scrapeProduct);

