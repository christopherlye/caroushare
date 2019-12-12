const express = require('express');
const sessions = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

sessions.post('/', (req, res) => {
	User.findOne({ username: req.body.username }, (err, foundUser) => {
		if (err) console.log(err.message);
		if (bcrypt.compareSync(req.body.password, foundUser.password)) {
			req.session.currentUser = foundUser;
			res.json(foundUser);
		}
	});
});

//Delete session / Log out
sessions.delete('/', (req, res) => {
	req.session.destroy(() => {
		res.redirect('/');
	});
});

module.exports = sessions;
