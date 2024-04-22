const router = require("express").Router();
const deletebookmodel = require("../models/bookmodel");

router.delete("/deletebook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await deletebookmodel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
