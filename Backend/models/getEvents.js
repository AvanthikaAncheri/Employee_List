const User = require("../Controller/userSchema")


const getEvents=async (req,res)=>{
    const Display=await User.find()
    res.json(Display)
}

module.exports=getEvents