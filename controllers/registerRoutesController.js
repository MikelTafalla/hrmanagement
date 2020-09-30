const db = require("../models")



module.exports = {
    signup: ({ body }, res) => {
        db.RegisterUser
            .create(body)
            .then(data => {
                res.json(data);
                console.log(data)
            }).catch(err => console.log(err))
    }
};