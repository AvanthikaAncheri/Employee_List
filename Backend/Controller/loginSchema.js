const mongoose = require("mongoose")

const loginSchema = mongoose.Schema({
    Name :{type: String},
    Email :{type: String},
    Password :{type: String},
})

const Signup = mongoose.model("Signup",loginSchema)
module.exports = Signup;

