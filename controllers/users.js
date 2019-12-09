const express = require('express');
const Users = require('../models/users.js');
const users = express.Router();
const bcrypt = require('bcrypt');

module.exports = users;
