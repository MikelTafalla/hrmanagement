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
  }
}