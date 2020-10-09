const router = require("express").Router();
const passport = require('../../passportConfig')
const db = require("../../models");
const { RegisterInfo } = require("../../models");

router.post("/register",
({ body }, res) => {
    console.log("user signup");

    const {username, password} = body
    //Add Validation
    db.RegisterInfo.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("there's an error")
      } else if (user) {
        res.json({error: ` User ${username} already exist`});
      } else {
        const newUser = new RegisterInfo({
          username: username,
          password: password
        });
        newUser.save((err, user));
        if (err) return res.json(err)
        res.json(user)
      }
    });
  }
)
router.post("/",
    function ({body}, res, next) {
        console.log('routes/registerRoutes.js, login, req.body: ');
        console.log(body)
        next()
    },
        passport.authenticate('local'),
        (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)


module.exports = router;