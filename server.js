// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 3005;

const db = mongoose.connection;

// Environment Variables
const mongoURI =
	process.env.MONGODB_URI ||
	'mongodb+srv://zacharylky:ragnarock1@cluster0-l0lis.mongodb.net/caroushare?retryWrites=true&w=majority';

// Connect to Mongo
mongoose.connect(
	mongoURI,
	{
		useNewUrlParser    : true,
		useUnifiedTopology : true
	},
	() => console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: true })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'));

// Controllers
const caroushareController = require('./controllers/caroushare.js');
app.use('/books', caroushareController);

const usersControllers = require('./controllers/users.js');
app.use('/users', usersControllers);

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
	res.status(404).json('page not found');
});

app.listen(PORT, () => {
	console.log("Let's get things done on port", PORT);
});
