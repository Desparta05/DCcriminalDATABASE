const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const villainSchema= new Schema({
    Image: {
        type: String,
        require: true,
    },
    Name: {
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
        require: false,
    },
    Weight: {
        type: String,
        require: true,
    },
    EyeColor: {
        type: String,
        require: true,
    },
    HairColor: {
        type: String,
        require: true,
    },
    City: {
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

const Villains = mongoose.model("Villains", villainSchema);
module.exports = Villains;