const db = require("../models/registerInfo");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use("local",
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, (username, password, done) => {
            console.log("here Config" + " "+ user)
            db.findOne({ username: username }, (err, user) => {
                console.log("here Config" + " "+ user)
                if (err) throw (err);
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
            })
        }),
        
    );
    passport.serializeUser((user, cb) => {     
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        db.findOne({ _id: id }, (err, user) => {
            const userInfo = {
                username: user.username
            };
            cb(err, userInfo)
        })
    })
};