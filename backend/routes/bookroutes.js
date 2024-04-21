const router = require("express").Router();
const bookmodel = require("../models/bookmodel");

router.post("/addbooks", async (req, res) => {
  try {
    const data = req.body;
    const newbook = new bookmodel(data);
    await newbook.save().then(() => {
      res.status(200).json({ message: "BOOK ADDED SUCCESSFULLY" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
