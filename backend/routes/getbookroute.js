const router = require("express").Router();
const getbookmodel = require("../models/bookmodel");
// const verifytoken = require('../app').verifytoken;

router.get("/getbooks/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("fetching books for user id:", userId)
    const books = await getbookmodel.find({ userId: userId });
    console.log(books);
    // const books = await getbookmodel.findById(); 
    res.status(200).json({ message: books }); 
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "Error retrieving books" }); 
  }
});

module.exports = router;
  