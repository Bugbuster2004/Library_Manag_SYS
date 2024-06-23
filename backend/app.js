const express = require("express");
require("./connection/conn");
const app = express();
const port = 3000;
const bookroute = require("./routes/bookroutes");
const getbook = require("./routes/getbookroute");
const update = require("./routes/updatebook");
const del = require("./routes/deletebook");
const jwt = require("jsonwebtoken")
const jwtkey = "lms"
const EmployeeModel = require("./models/Employeemodel");
const cors = require("cors")
app.use(cors())
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
    const user = await EmployeeModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        jwt.sign({ user }, jwtkey, { expiresIn: "60s" }, (err, token) => {
          if (err) {
            return res.send({ result: "user not found from jwt sign" });
          }
          res.status(200).send({ user, auth: token });
        });
      } else {
        res.status(401).json({ message: "Email Or Password is incorrect" });
      }
    } else {
      res.json("User not found create an account!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route Handler for Creating User
app.post("/register", async (req, res) => {
  try {
    const newUser = await EmployeeModel.create(req.body);
    jwt.sign({user : newUser}, jwtkey,{ expiresIn: "60s" }, (err, token)=>{
      if(err){
        return res. send({result:"user not found from token again this is register"})
      }
      //send the data and the token simultaneously
      return res.status(201).send({message:"User create ssuccesfully",user: newUser, auth:token})
     
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", message: error.message });
  }
});
app.get("/dashboard", verifytoken, (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
});

function verifytoken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1]; // Split and get the token part
    jwt.verify(token, jwtkey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "You are not authorized" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: "Please add token with header" });
  }
}


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
