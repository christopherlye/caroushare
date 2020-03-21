// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 3005;

const db = mongoose.connection;

// Environment Variables
const mongoURI = "localhost:27017"; // process.env.MONGODB_URI;

// Connect to Mongo
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.urlencoded({ extended: true })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public"));
app.use(
  session({
    secret: "mutusamy chen",
    resave: false,
    saveUninitialized: false
  })
);

// Controllers
const booksController = require("./controllers/books.js");
app.use("/books", booksController);

const usersControllers = require("./controllers/users.js");
app.use("/users", usersControllers);

const sessionsControllers = require("./controllers/sessions.js");
app.use("/sessions", sessionsControllers);

// this will catch any route that doesn't exist
app.get("*", (req, res) => {
  res.status(404).json("page not found");
});

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
