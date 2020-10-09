const db = require("../models");
const { RegisterInfo } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  register: ({ body }, res) => {
    db.RegisterInfo.findOne({ username: body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exist");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const newUser = new RegisterInfo({
          username: body.username,
          password: hashedPassword
        });
        await newUser.save();
        console.log(hashedPassword);
        res.send("User Created");
      }
    });
  }
};
