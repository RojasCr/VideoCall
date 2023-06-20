const mongoose = require("mongoose");

const postsCollection = "posts"

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    pet: String,
    description: String,
    photo: {
        contentType: String,
        image: String
    }
})


const postsModel = mongoose.model(postsCollection, postSchema);


module.exports = postsModel;