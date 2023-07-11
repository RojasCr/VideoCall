const mongoose = require("mongoose");

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        default: null
    },
    profilePhoto: {
        contentType: String,
        image: Buffer
    },
})


const usersModel = mongoose.model(usersCollection, userSchema);



module.exports = usersModel;