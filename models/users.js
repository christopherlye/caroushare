const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name      : { type: String, required: true },
	username  : { type: String, unique: true, required: true },
	password  : { type: String, required: true },
	favorites : Array
});

const Users = mongoose.model('User', userSchema);
module.exports = Users;
