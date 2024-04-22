const express = require("express");
require("./connection/conn");
const app = express();
const port = 3000;
const bookroute = require("./routes/bookroutes");
const getbook = require("./routes/getbookroute");
const update = require("./routes/updatebook");
const del = require("./routes/deletebook");
const EmployeeModel = require("./models/Employeemodel");

app.use(express.json());
//create
app.use("/api", bookroute);
//read
app.use("/api", getbook);
//update
app.use("/api", update);
//delete
app.use("/api", del);
//login handler
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    await EmployeeModel.findOne({ email }).then((user) => {
      if (user) {
        if (password === password) {
          res.status(200).json({ message: "User login success", user });
        } else {
          res.status(401).json({ message: "Email Or Password is incorrect" });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// Route Handler for Creating User
app.post("/register", async (req, res) => {
  try {
    const newUser = await EmployeeModel.create(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", message: error.message });
  }
});

// Route Handler for Checking User Existence
app.get("/checkuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email, password });
    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to check user existence",
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
