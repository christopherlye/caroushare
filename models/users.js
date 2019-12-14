const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Books" }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
