const indexController = require("../controllers/index.controller")
const authController = require("../auth/auth.controller");
const usersCrontroller = require("../controllers/users.controller")

const router = (app) => {
    app.use("/", indexController);
    app.use("/auth", authController);
    app.use("/api/users", usersCrontroller)
}

module.exports = router;

