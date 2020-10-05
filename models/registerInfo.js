const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RegisterInfoSchema = new Schema({

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

const RegisterInfo = mongoose.model("RegisterInfo", RegisterInfoSchema);

module.exports = RegisterInfo;
