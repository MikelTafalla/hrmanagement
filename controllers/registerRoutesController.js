const db = require("../models");
const { RegisterInfo } = require("../models");
const bcrypt = require("bcryptjs");



module.exports = {
  register: ({ body }, res) => {
    db.RegisterInfo.findOne({ email: body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exist");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const newUser = new RegisterInfo({
          email: body.email,
          password: hashedPassword
        });
        await newUser.save();
        console.log(hashedPassword);
        res.send("User Created");
      }
    });
  }
};




// db.RegisterInfo
// .create(body)
// .then(data => {
//     res.json(data);
//     console.log(data)
// }).catch(err => console.log(err))
// }