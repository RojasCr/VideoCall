require("dotenv").config({
    path: `${process.cwd()}/.env.${process.env.NODE_ENV}`
})

module.exports = {
    googleClientId : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleCallBackUrl: process.env.GOOGLE_CALLBACK_URL
}