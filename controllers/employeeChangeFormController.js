const db = require("../models");

module.exports = {
  findById: ({ params }, res) => {
    console.log(params.id)
    db.EmployeeChangeForm
      .findById(params.id)
      .then(dbmodel => {
        console.log(dbmodel);
        res.json(dbmodel)
      })
      .catch(err => console.log(err))
  },
  update: ({ params, body }, res) => {
    console.log(body);
    db.EmployeeChangeForm
      .findOneAndUpdate({ _id: params.id }, body)
      .then(dbmodel => res.json(dbmodel))
      .catch(err => console.log(err));
  },
  create: ({ body }, res) => {
    db.EmployeeChangeForm
      .create(body)
      .then(data => {
        console.log(data)
        res.json(data)
      })
      .catch(err => console.log("You Fucked Up!!"))
  }

}