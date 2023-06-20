const mongoose = require("mongoose");

const filesCollection = "files";

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    contentType: String,
    image: Buffer
})

const filesModel = mongoose.model(filesCollection, fileSchema);

module.exports = filesModel;