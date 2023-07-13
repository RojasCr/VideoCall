//const UsersMongoDao = require("../dao/users/UsersMongoDao")
const UsersDao = require("../dao/factory")
const UsersRepository = require("./users/users.repository")

const Users = new UsersRepository(new UsersDao());

module.exports = Users;