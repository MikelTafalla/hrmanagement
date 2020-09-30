const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterInfo = new Schema({

    email: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String
    }

});

const RegisterInfo = mongoose.model("RegisterInfo", RegisterInfo);

module.exports = RegisterInfo;
