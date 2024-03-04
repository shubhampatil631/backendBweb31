import express from "express";
import UserModel2 from "../modles/Admin.js";
const router = express.Router();

export function CreateAdmin(req, res) {
  UserModel2.create({
    AdminUsername: req.body.Username,
    AdminPassword: req.body.Password,
    AdminDepartment: req.body.Department,
    AdminContactNo: req.body.ContactNo,
  })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function getAllAdmin(req, res) {
  UserModel2.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function getAdmins(req, res) {
  const id = req.params.id;
  UserModel2.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function loginAdmin(req, res) {
  const { Username, Password } = req.body;
  try {
    const user = UserModel2.findOne({
      AdminUsername: Username,
      AdminPassword: Password,
    });
    console.log(Username, Password);
    if (user) {
      res.json({
        success: true,
        message: "Login successful",
        AdminDepartment: user.AdminDepartment,
        AdminContactNo: user.AdminContactNo,
      });
      console.log("Login successful");
    } else {
      res.json({ success: false, message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
export function UpdateAdmin(req, res) {
  const id = req.params.id;
  UserModel2.findByIdAndUpdate(
    { _id: id },
    {
      AdminUsername: req.body.AdminUsername,
      AdminPassword: req.body.AdminPassword,
      AdminDepartment: req.body.AdminDepartment,
      AdminContactNo: req.body.AdminContactNo,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function DeleteAdmin(req, res) {
  const id = req.params.id;
  UserModel2.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
