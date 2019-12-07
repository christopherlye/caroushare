const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  image: String,
  owner: String
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
