const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    userName: {
        type: String,
      },
      phone:{
        type:Number,
    },
    designation: {
        type: String,
      },
    gender:{
        type: String,
    },
    course:{
        type:String,
    },
    
    image:{
        type:String, 
    }
  })

const User = mongoose.model("User",userSchema);

module.exports = User;