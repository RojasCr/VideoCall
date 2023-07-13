require("dotenv").config({
    path: `${process.cwd()}/.env.${process.env.NODE}`
})

module.exports = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}