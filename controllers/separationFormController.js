const db = require("../models");

module.exports = {
  createTerminationForm: ({ body }, res) => {

    db.TerminationForm
      .create(body)
      .then(dbmodel => {
        console.log(dbmodel);
        res.json(dbmodel)
      })
      .catch(err => console.log(err))
  }
}