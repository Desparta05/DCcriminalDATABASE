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

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Scrap Image
    const [sImage] = await page.$x('//*[@id="mw-content-text"]/div/aside/figure/a/img')
    const src = await sImage.getProperty('src');
    const Image = await src.jsonValue();

    // Scrap Name
    const [sName] = await page.$x('//*[@id="mw-content-text"]/div/aside/div[1]/div/a')
    const txt = await sName.getProperty('textContent');
    const Name = await txt.jsonValue();

    // Scrape Alias
    const [sAlias] = await page.$x('//*[@id="mw-content-text"]/div/aside/div[2]/div')
    const txt2 = await sAlias.getProperty('textContent');
    const Alias = await txt2.jsonValue();

    // Scrape Gender
    const [sGender] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[1]/div/a')
    const txt3 = await sGender.getProperty('textContent');
    const Gender = await txt3.jsonValue();

    // Scrape Height
    const [sHeight] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[2]/div/span/a')
    const txt4 = await sHeight.getProperty('textContent');
    const Height = await txt4.jsonValue();

    // Scrape Weight
    const [sWeight] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[3]/div/span/a')
    const txt5 = await sWeight.getProperty('textContent');
    const Weight = await txt5.jsonValue();

    // Scrape Eye Color
    const [sEyes] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[4]/div/a')
    const txt6 = await sEyes.getProperty('textContent');
    const EyeColor = await txt6.jsonValue();

    // Scrape Hair Color
    const [sHair] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[5]/div')
    const txt7 = await sHair.getProperty('textContent');
    const HairColor = await txt7.jsonValue();

    // Scrape Base Of Operations
    const [sCity] = await page.$x('//*[@id="mw-content-text"]/div/aside/div[3]/div/a')
    const txt8 = await sCity.getProperty('textContent');
    const City = await txt8.jsonValue();

    // Scrape Powers and Abilities
    const [sPowers] = await page.$x('//*[@id="mw-content-text"]/div/ul[1]')
    const txt9 = await sPowers.getProperty('textContent');
    const Powers = await txt9.jsonValue();

    // Scrape Description
    const [sDescrip] = await page.$x('//*[@id="mw-content-text"]/div/p[3]')
    const txt10 = await sDescrip.getProperty('textContent');
    const Description = await txt10.jsonValue();

    console.log({ Image, Name, Alias, Gender, Height, Weight, EyeColor, HairColor, City, Powers, Description });

    browser.close();
    db.Villains.create({ Image, Name, Alias, Gender, Height, Weight, EyeColor, HairColor, City, Powers, Description }).then(() => console.log("character created"))
}

scrapeProduct('https://dc.fandom.com/wiki/Alexander_Sartorius_(New_Earth)');