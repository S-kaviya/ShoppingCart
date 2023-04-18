const express = require("express");
const app = express();
let Register = require("../model/Register")
const loginRoute = express.Router();
let Login = require("../model/Login");

const UserController = require("../Controllers/CU");
//Add Login details(username and password)
// loginRoute.route('/User-Added').post((req,res,next)=>{
//     Login.create(req.body)
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((error)=>{
//         return next(error);
//     });
// });

// //Add Register details(username and password)
// loginRoute.route('/Register-User').post((req,res,next)=>{
//   Login.create(req.body)
//   .then((data)=>{
//       res.json(data);
//   })
//   .catch((error)=>{
//       return next(error);
//   });
// });

// //Get all user details
// loginRoute.route('/').get((req, res, next) => {
//     Login.find()
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((error) => {
//         return next(error);
//       });
//   });

// module.exports = loginRoute;

loginRoute.post("/User-Added", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  const result = await UserController.checkUser(username, password);
  console.log("result", result);
  if (result.error) {
    return res.status(401).json({ error: result.error });
  }
  return res.status(200).json({ user: result, message: "User valid" });
});

loginRoute.route("/Register-User").post((req, res, next) => {
  Register.create(req.body)
    .then((data) => {
      res.json({ data: data, message: "User Registered Successfully" });
    })
    .catch((error) => {
      return next(error);
    });
});

module.exports = loginRoute;
