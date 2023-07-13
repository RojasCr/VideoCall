const { mongoose } = require("mongoose");
const { dbUser, dbPassword, dbHost, dbName } = require("../config/db.config");

const mongoConnect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
    )
    .then(console.log("DB conectada"))
    .catch(err => console.log(err))
}

module.exports = mongoConnect;