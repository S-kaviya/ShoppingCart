const express = require("express");
const app = express();

const loginRoute = express.Router();
let Login = require('../model/Login');

//Add Login details(username and password)
loginRoute.route('/User-Added').post((req,res,next)=>{
    Login.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        return next(error);
    });
});


//Get all user details
loginRoute.route('/').get((req, res, next) => {
    Login.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        return next(error);
      });
  });

  
module.exports = loginRoute;