const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  image: String,
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
