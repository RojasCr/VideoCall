const UsersMongoDao = require("../dao/UsersMongoDao")
const UsersRepository = require("./users/users.repository")

const Users = new UsersRepository(new UsersMongoDao());

module.exports = Users;