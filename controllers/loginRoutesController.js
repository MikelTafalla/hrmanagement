const passport = require("passport");

module.exports = {
  login: ({body}, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        console.log(user)
          if (err) throw err;
          if(!user) res.send("No User Exists");
          else {
            body.logIn(user, (err) => {
                if (err) throw err;
                res.send("Succesfully Authenticated");
                // console.log(req.user)
            })
          }
      }) (body, res, next)
    
  }
};
