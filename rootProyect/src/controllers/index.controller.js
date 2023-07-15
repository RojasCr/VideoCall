const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/login.html`)
});

router.get("/signup", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/signup.html`)
});

router.get("/dashboard", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/dashboard.html`)
});

router.get("/profile", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/profile.html`)
});

router.get("/streams", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/chat.html`)
});

router.get("/visitors", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/views/visitors.html`)
});


module.exports = router;