const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/bookmodel'); // Adjust the path as necessary

router.post('/updateBooks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, imageUrl } = req.body;

  if (!id) {
    return res.status(400).send({ message: "Book ID is required" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Book ID" });
  }

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { title, description, price, imageUrl }, { new: true });
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.send(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
