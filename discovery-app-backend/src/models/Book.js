const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: Date },
  rating: { type: Number, default: 0 },
  image: { type: String, default: "https://via.placeholder.com/150" }, 
});

module.exports = mongoose.model("Book", bookSchema);
