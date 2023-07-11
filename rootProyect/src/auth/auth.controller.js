const { Router } = require("express");
const Users = require("../repositories");
const UsersDto = require("../DTOs/users.dto");

const router = Router();

router.post("/", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const currentUser = await Users.findOne(email);

        if(!currentUser || currentUser.password !== password) {
            return res.status(400).json({status: "Error", payload: "User or password not exist"});
        }

        const userDto = UsersDto.info(currentUser);

        return res.status(200).cookie("user", userDto, {httpOnly: true, secure: true}).json({status: "success", payload: userDto});
    
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = router;