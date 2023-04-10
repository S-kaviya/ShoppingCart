const mangoose = require("mongoose");
const Schema = mangoose.Schema;

let Login = new Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    {
        //Here in login collection all details are stored
        collection: "login",
    }
);

module.exports = mangoose.model("Login", Login)