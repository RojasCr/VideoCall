require("dotenv").config({
    path: `${process.cwd()}/.env.${process.env.NODE_ENV}`
})

module.exports = {
    facebookClientId : process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    facebookCallBackUrl: process.env.FACEBOOK_CALLBACK_URL
}