const db = require("../models");
const bcrypt = require("bcryptjs");
const passportLocal = require("passport-local").Strategy;



module.exports = (passport) => {
    passport.use(
        new passportLocal((email, password, done) => {
            db.RegisterInfo.findOne({ email: email }, (err, user) => {
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
        })
    );
    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        db.RegisterInfo.findOne({ _id: id }, (err, user) => {
            const userInfo = {
                email: user.email
            };
            cb(err, userInfo)
        })
    })
};