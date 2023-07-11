const express = require("express");
const http = require("http")
const io = require("socket.io")

const router = require("./router/Router");
const socketHandler = require("./socketHandler");
const mongoConnect = require("./db");

const app = express();
const server = http.Server(app);
const socketServer = io(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${process.cwd()}/src/public/`));

mongoConnect();

socketHandler(socketServer);

router(app)

module.exports = {server};