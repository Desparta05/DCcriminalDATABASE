const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const heroSchema= new Schema({
    image: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    Alias: {
        type: String,
        require: true,
    },
    Gender: {
        type: String,
        require: true,
    },
    Height: {
        type: String,
        require: true,
    },
    Weight: {
        type: String,
        require: true,
    },
    eyeColor: {
        type: String,
        require: true,
    },
    hairColor: {
        type: String,
        require: true,
    },
    Base: {
        type: String,
        require: true,
    },
    Powers: {
        type: String,
        require: true,
    },
    Description: {
        type: String,
        require: true,
    },

})

const Heroes = mongoose.model("Heroes", heroSchema);
module.exports = Heroes;