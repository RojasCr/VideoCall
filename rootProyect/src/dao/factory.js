const { PERSISTENCE } = require("../config/app.config")

const daos = {
    "mongoDB": require("./users/UsersMongoDao"),
    "local": require("./users/UsersLocalDao")
}

const currentDao = daos[PERSISTENCE];

module.exports = currentDao;