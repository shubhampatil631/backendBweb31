import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//import { v4 as uuidv4 } from "uuid";
import UserModel from "./modles/Student.js";
import UserModel1 from "./modles/User.js";
import UserModel2 from "./modles/Admin.js";
import {
  Createstudent,
  getStudent,
  Newupdate,
  DeleteStd,
  checkboxfield,
  Lastpagespicificcdoc,
  search,
  Docdept,
  Alldoc,
  Category,
  records,
} from "./route/studentRoute.js";
import {
  DeleteAdmin,
  UpdateAdmin,
  loginAdmin,
  getAdmins,
  getAllAdmin,
  CreateAdmin,
} from "./route/adminRoute.js";
import {
  DeleteUsers,
  CountDoc,
  UpdateUserOnstd,
  UpdateUser,
  loginUser,
  CreateUser,
  getAllUsers,
  getUsers,
  getCount,
} from "./route/userRoute.js";
const app = express();
//app.use("/user", userRoute);
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shubham:kingshubham@cluster1.zswx871.mongodb.net/collegeform"
);

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => {
      //console.log(users);
      res.json(users);
    })
    .catch((err) => console.log(err));
});

app.post("/Createstudent", Createstudent);
app.get("/getStudent/:id", getStudent);
app.put("/Newupdate/:id", Newupdate);
app.delete("/DeleteStd/:id", DeleteStd);
app.post("/CreateAdmin", CreateAdmin);
app.post("/CreateUser", CreateUser);
app.post("/getAllAdmin", getAllAdmin);
app.get("/getAllUsers", getAllUsers);
app.get("/getAdmins/:id", getAdmins);
app.get("/getUsers/:id", getUsers);
app.get("/getCount", getCount);
app.post("/loginAdmin", loginAdmin);
app.post("/loginUser", loginUser);
app.put("/UpdateAdmin/:id", UpdateAdmin);
app.put("/UpdateUser/:id", UpdateUser);
app.put("/UpdateUserOnstd", UpdateUserOnstd);
app.post("/CountDoc", CountDoc);
app.delete("/DeleteAdmin/:id", DeleteAdmin);
app.delete("/DeleteUsers/:id", DeleteUsers);
app.get("/records", records);
app.get("/Category", Category);
app.get("/Alldoc", Alldoc);
app.get("/Docdept", Docdept);
app.post("/search/:searchKey", search);
app.post("/Lastpagespicificcdoc", Lastpagespicificcdoc);
app.post("/checkboxfield", checkboxfield);

app.listen(5000, () => {
  console.log("server is runing");
});
