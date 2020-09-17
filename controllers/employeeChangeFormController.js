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
      .then(data => res.json(data)
      )
      .catch(err => console.log(err))
  },
  createExisting: ({ body }, res) => {
    db.EmployeeChangeForm
      .create(body)
      .then(data => res.json(data)
      )
      .catch(err => console.log(err))
  },
  findAll: (req, res) => {
    db.EmployeeChangeForm
      .find(req.query)
      .then(dbmodel => {
        // console.log(dbmodel)
        res.json(dbmodel)
      })
      .catch(err => console.log(err))
  },
  findReport: ({params}, res) => {
    console.log(params)
    db.EmployeeChangeForm
    .find({employeeId: params.id})
    .then(dbmodel => {
      console.log(dbmodel)
      res.json(dbmodel)
    })
    .catch(err => console.log(err))
  }
}