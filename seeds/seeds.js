const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/db_dcComics",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    }
);

const UserSeed = [
    {
        username: TheDankKnight,
        password: Martha,
        codename: Batman,
    }
]

async function seedUsers() {
    try {
        await db.User.deleteMany({});
        await db.User.collection.insertMany(UserSeed);
        console.log("Users successfully seeded!");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

seedUsers();