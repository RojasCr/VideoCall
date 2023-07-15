const mongoose = require("mongoose");
const { hashPass } = require(`${process.cwd()}/src/utils/bcrypt.utils`);

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    googleId: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        //required: true
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

userSchema.pre("save", function(next) {
    this.password = hashPass(this.password);
    //console.log(this)
    next();
})

const usersModel = mongoose.model(usersCollection, userSchema);

module.exports = usersModel;