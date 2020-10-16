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

    db.TerminationForm
      .find({ employee_id: params.id })
      .then(data => {
        console.log(data)
        res.json(data)
      })
      .catch(err => console.log(err))
  },
  updateTerminationForm: ({ params, body }, res) => {

    db.TerminationForm
      .findOneAndUpdate({ _id: params.id }, body)
      .then(dbmodel => res.json(dbmodel))
      .catch(err => console.log(err));
  },
  findterminatedemployee: ({ params }, res) => {

    db.TerminationForm
      .findById(params.id)
      .then(dbmodel => {
        console.log(dbmodel);
        res.json(dbmodel)
      })
      .catch(err => console.log(err))
  }
}