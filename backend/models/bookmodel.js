const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: String,  // Adjust the type according to your userId type (e.g., String or mongoose.Schema.Types.ObjectId)
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
