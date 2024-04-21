const router = require("express").Router();
const updatemodel = require("../models/bookmodel");

router.get("/getbooks", async (req, res) => {
  let books;
  try {
    books = await updatemodel.find();
    res.status(200).json({ message: "BOOK UPDATED SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
  }
});
