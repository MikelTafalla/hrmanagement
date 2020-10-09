const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const RegisterInfoSchema = new Schema({

	username: { type: String, unique: true },
    password: { type: String, unique: true },
    role: { type: String }

})

// Define schema methods
RegisterInfoSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
RegisterInfoSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/registerInfo.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/registerInfo.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})


const RegisterInfo = mongoose.model("RegisterInfo", RegisterInfoSchema);
module.exports = RegisterInfo;
