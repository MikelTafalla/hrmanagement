const db = require("../models");

module.exports = {
    findNewHire: ({ params }, res) => {
        console.log(params.id)
        db.NewHireForm
          .findById(params.id)
          .then(dbmodel => {
            console.log(dbmodel);
            res.json(dbmodel)
          })
          .catch(err => console.log(err))
      },
      findHiringReport: ({ params }, res) => {
        console.log(params)
        db.NewHireForm
          .find({ employeeId: params.id })
          .then(dbmodel => {
            console.log(dbmodel)
            res.json(dbmodel)
          })
          .catch(err => console.log(err))
      },
      findAll: (req, res) => {
        db.NewHireForm
          .find(req.query)
          .then(dbmodel => {
            // console.log(dbmodel)
            res.json(dbmodel)
          })
          .catch(err => console.log(err))
      },
      postNewHire: ({ body }, res) => {
        db.NewHireForm
          .create(body)
          .then(data => res.json(data)
          )
          .catch(err => console.log(err))
      },
      updateNewHire: ({ params, body }, res) => {
        console.log(body);
        db.NewHireForm
          .findOneAndUpdate({ _id: params.id }, body)
          .then(dbmodel => res.json(dbmodel))
          .catch(err => console.log(err));
      }
}