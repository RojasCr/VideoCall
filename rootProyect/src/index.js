const express = require("express");
const http = require("http")
const io = require("socket.io")
const passport = require("passport");
const expressSession = require("express-session");

const router = require("./router/Router");
const socketHandler = require("./socketHandler");
const mongoConnect = require("./db");
const initializePassport = require("./config/passport.config");

const app = express();
const server = http.Server(app);
const socketServer = io(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${process.cwd()}/src/public/`));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "secret"
}))

app.use(passport.initialize());
app.use(passport.session())

mongoConnect();

socketHandler(socketServer);

initializePassport();
router(app)

module.exports = {server};