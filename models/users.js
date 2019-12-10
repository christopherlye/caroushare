const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username : { type: String, unique: true, required: true },
	password : { type: String, required: true }
});

const Users = mongoose.model('User', userSchema);
module.exports = Users;
