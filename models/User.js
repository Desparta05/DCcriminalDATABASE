const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, `Please enter a valid username.`],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, `Please enter a valid password`],
        trim: true,
    },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;