const mongoose = require("mongoose");
const { hashPass } = require("../../../utils/bcrypt.utils");

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    googleId: String,
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
        unique: true
    },
    email: {
        type: String,
        unique: true,
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