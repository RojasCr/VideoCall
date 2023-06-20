const express = require("express");
const http = require("http")
const io = require("socket.io")

const router = require("./router/Router");

const app = express();
const server = http.Server(app);
const socketServer = io(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${process.cwd()}/src/public/`));

socketServer.on("connection", (socket) => {

    socket.name = `socket ${Math.floor(Math.random()*100)}`
    
    console.log(`${socket.name} Connected`);

    socket.on("join", id => {
        socket.broadcast.emit("userId", id)
    })
    
    /*socket.on("video", (data) => {
        //console.log(data)
        socket.broadcast.emit("video", data)
    })*/
    
    socket.on("disconnect", () => {
        console.log(`${socket.name} Disconnected`);
    })
})

router(app)

module.exports = {server};