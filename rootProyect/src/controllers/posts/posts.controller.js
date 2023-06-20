const { Router } = require("express");
const postsModel = require("../../dao/models/posts.model");

const router = Router();

router.get("/all", async(req, res) => {
    try {
        const posts = await postsModel.find().populate("author");

        res.status(200).json({status: "Success", payload: posts})
    } catch (error) {
        throw new Error(error)
    }
});

module.exports = router