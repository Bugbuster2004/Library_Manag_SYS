const express = require("express");
require("./connection/conn");
const app = express();
const port = 3000;
const bookroute = require("./routes/bookroutes");
app.use(express.json());
app.use("/api", bookroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
