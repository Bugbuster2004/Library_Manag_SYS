// const router = require("express").Router();
// const bookmodel = require("../models/bookmodel");

// router.post("/addbooks/userId", async (req, res) => {
//   try {
//     const data = req.body;
//     const newbook = new bookmodel(data);
//     await newbook.save().then(() => {
//       res.status(200).json({ message: "BOOK ADDED SUCCESSFULLY" });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const Book = require("../models/bookmodel");

router.post("/addbooks", async (req, res) => {
  try {
    const { title, author, genre, description, price , imageUrl, userId } = req.body;
    const newBook = new Book({ title, author, genre, description, price, imageUrl, userId });
    await newBook.save();
    res.status(200).json({ message: "BOOK ADDED SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding book" });
  }
});

module.exports = router;
