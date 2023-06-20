const { Router } = require("express");
//const filesModel = require("../dao/models/files.model");

const router = Router();



router.get("/", (req, res) => {
    res.send("hola")
    //res.sendFile(`${process.cwd()}/src/public/views/home.html`)
});

router.get("/chat", (req, res) => {
    //res.send("hola")
    res.sendFile(`${process.cwd()}/src/public/views/chat.html`)
});

router.get("/visitors", (req, res) => {
    //res.send("hola")
    res.sendFile(`${process.cwd()}/src/public/views/visitors.html`)
});


module.exports = router;