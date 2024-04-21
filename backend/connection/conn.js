const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sid:sid2004@cluster0.6dympwg.mongodb.net/backend?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MONGO DB CONNECTED SUCCESSFULLY");
  });
