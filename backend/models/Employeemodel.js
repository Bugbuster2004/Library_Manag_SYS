const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "employee", "manager"],
    default: "employee",
  },
 
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
