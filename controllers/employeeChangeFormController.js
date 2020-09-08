const db = require("../models");


module.exports = {
    findById: ({ params }, res) => {
        db.EmployeeChangeForm
            .findById(params.id)
            .then(dbmodel => console.log(res.json(dbmodel)))
            .catch(err => console.log(err))
    }
}