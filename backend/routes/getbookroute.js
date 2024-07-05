const router = require("express").Router();
const getbookmodel = require("../models/bookmodel");
// const verifytoken = require('../app').verifytoken;

router.get("/getbooks", async (req, res) => {
  try {
    const books = await getbookmodel.find(); 
    res.status(200).json({ message: books }); 
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "Error retrieving books" }); 
  }
});

module.exports = router;
  