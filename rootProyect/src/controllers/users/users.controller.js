const { Router } = require("express");
const usersModel = require("../../dao/models/users.model");
const postsModel = require("../../dao/models/posts.model");

const router = Router();

router.post("/signup", async(req, res) => {
    try {
        const {name, lastName, email, password} = req.body

        const userInfo = {
            name,
            lastName,
            email,
            password
        }

        const newUser = await usersModel.create(userInfo)

        res.status(200).json({status: "Success", payload: newUser})
    } catch (error) {
        throw new Error(error)
    }
});

router.post("/upload", async(req, res) => {
    try {
        const { author, fileName, description } = req.body
        const file = req.files.photo;

        const user = await usersModel.findOne({email: author})
        
        const postInfo = {
            author: user._id,
            pet: fileName,
            description,
            photo: {
                contentType: file.mimetype,
                image: file.data.toString("base64")
            }
        }
        
        const result = await postsModel.create(postInfo)
        await usersModel.updateOne({email: author}, {$push: {posts: result._id}})
        
        //console.log(file)
        res.status(200).json({status: "Success", payload: result})
    } catch (error) {
        throw new Error(error)
    }
    
});

router.get("/all", async(req, res) => {
    try {
        const users = await usersModel.find().populate("posts");

        res.status(200).json({status: "Success", payload: users})
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = router;