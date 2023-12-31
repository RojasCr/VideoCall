const { Router } = require("express");
const UsersDto = require("../DTOs/users.dto");
const Users = require("../repositories");

const router = Router();

router.post("/", async (req, res) => {
    try {
        const newUserInfo = req.body;

        const user = await Users.findOne(newUserInfo.email);

        if(user){
            return res.status(400).json({status: "Error", payload: "Ya tienes una cuenta"})
        }

        const newUserDto = UsersDto.create(newUserInfo);

        const newUser = await Users.create(newUserDto);

        const userDto = UsersDto.info(newUser);
        
        return res.status(200).cookie("user", userDto, {httpOnly: true, secure: true}).redirect("/dashboard");
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;