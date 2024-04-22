const router = require("express").Router();
const getbookmodel = require("../models/bookmodel");

router.get("/getbooks/:id", async (req, res) => {
  let books;
  const id = req.params.id;
  try {
    books = await getbookmodel.findById(id);
    res.status(200).json({ message: books });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
