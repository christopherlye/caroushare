const express = require('express');
const User = require('../models/users.js');
const users = express.Router();
const bcrypt = require('bcrypt');

users.post('/', (req, res) => {
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(
		{
			username : req.body.username,
			password : req.body.password
		},
		(err, createdUser) => {
			if (err) console.log(err.message);
			res.json(createdUser);
		}
	);
});

// Show books
users.get('/', (req, res) => {
	User.find({}).populate('books').exec((err, foundUser) => {
		res.json(foundUser);
	});
});

module.exports = users;
