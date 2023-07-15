const { Router } = require("express");

const UsersDto = require("../DTOs/users.dto");
const passport = require("passport");

const router = Router();

router.post("/", passport.authenticate("login", {failureRedirect: "/"}), async (req, res) => {
    try {
        
        const currentUser = req.user;
        const userDto = UsersDto.info(currentUser);
        
        return res.status(200).cookie("user", userDto, {httpOnly: true, secure: true}).redirect("/dashboard");
        
    } catch (error) {
        throw new Error(error)
    }
})

router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}))

router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}), async(req, res) => {
    try {
        
        const currentUser = req.user;
        const userDto = UsersDto.info(currentUser);
        
        return res.status(200).cookie("user", userDto, {httpOnly: true, secure: true}).redirect("/dashboard");
    } catch (error) {
        throw new Error(error);
    }
})

// router.get("/facebook", passport.authenticate("facebook", {scope: ["public_profile", "email"]}))

// router.get("/facebook/callback", passport.authenticate("facebook", {failureRedirect: "/"}), async(req, res) => {
//     try {
        
//         const currentUser = req.user;
//         const userDto = UsersDto.info(currentUser);

//         return res.status(200).cookie("user", userDto, {httpOnly: true, secure: true}).redirect("/profile");
//     } catch (error) {
//         throw new Error(error);
//     }
// })

module.exports = router;