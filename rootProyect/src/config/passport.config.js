const passport = require("passport");
const local = require("passport-local");
const google = require("passport-google-oauth20");

const Users = require("../repositories/index");
const { googleClientId, googleClientSecret, googleCallBackUrl } = require("./google.config");
const { comparePass } = require(`${process.cwd()}/src/utils/bcrypt.utils`);

const LocalStrategy = local.Strategy;
const GoogleStrategy = google.Strategy;

const initializePassport = () => {

    passport.use("login", new LocalStrategy(
        {usernameField: "email"},
        async (username, password, done) => {
            try {
                const user = await Users.findOne(username);
                const isVerified = comparePass(password, user.password);

                if(!user || !isVerified){
                    return done(null, false);
                }
    
                return done(null, user)
    
            } catch (error) {
                done(error);
            }
        }
    ));

    passport.use("google", new GoogleStrategy(
        {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: googleCallBackUrl
        },
        async (accesToken, refreshToken, profile, done) => {
            try {
                const user = await Users.findOne(profile._json.email);
                
                if(!user){
                    const newUserInfo = {
                        googleId: profile.id,
                        name: profile._json.given_name,
                        lastName: profile._json.family_name,
                        email: profile._json.email,
                    }

                    const newUser = await Users.create(newUserInfo);
                    return done(null, newUser)
                }

                user.googleId = profile.id

                await Users.updateOne(profile._json.email, user);

                return done(null, user);
            } catch (error) {
                done(error)
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.email)
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await Users.findOne(id);
            return done(null, user);
        } catch (error) {
            done(error)
        }
    });
}

module.exports = initializePassport;
