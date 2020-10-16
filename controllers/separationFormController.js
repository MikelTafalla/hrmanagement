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
  },
  findTermination: ({ params }, res) => {
    console.log(params)
    db.TerminationForm
      .find({ employee_id: params.id })
      .then(data => {
        console.log(data)
        res.json(data)
      })
      .catch(err => console.log(err))
  }
}