const indexController = require("../controllers/index.controller")
const userController = require("../controllers/users/users.controller")
const postController = require("../controllers/posts/posts.controller")

const router = (app) => {
    app.use("/", indexController)
    /*app.use("/user", userController)
    app.use("/post", postController)*/
}

module.exports = router;

