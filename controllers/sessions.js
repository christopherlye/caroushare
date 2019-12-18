const express = require('express');
const sessions = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

sessions.post('/', (req, res) => {
	User.findOne({ username: req.body.username }, (err, foundUser) => {
		if (err) {
			console.log(err.message);
			res.send('Error loading mongo');
		}
		console.log('found: ', foundUser);
		if (foundUser == null) {
			res.send({ message: null });
		} else {
			if (bcrypt.compareSync(req.body.password, foundUser.password)) {
				req.session.currentUser = foundUser;
				res.json(foundUser);
			} else {
				res.send({ message: false });
			}
		}
		w;
	});
});

//Delete session / Log out
sessions.delete('/', (req, res) => {
	req.session.destroy(() => {
		res.redirect('/');
	});
});

module.exports = sessions;
