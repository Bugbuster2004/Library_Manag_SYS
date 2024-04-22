const router = require("express").Router();
const updatebookmodel = require("../models/bookmodel");

router.post("/updateBooks/:id", async (req, res) => {
  const { title, author, genre, description, price, imageUrl } = req.body;
  try {
    const updatedBook = await updatebookmodel.findOneAndUpdate(
      { _id: req.params.id },
      { title, author, genre, description, price, imageUrl },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
