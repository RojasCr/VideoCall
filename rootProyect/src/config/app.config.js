require("dotenv").config({
    path: `${process.cwd()}/.env.${process.env.NODE_ENV}`
})

module.exports = {
    PORT: process.env.PORT || 3000,
    PERSISTENCE: process.env.PERSISTENCE /*|| "mongoDB"*/
}