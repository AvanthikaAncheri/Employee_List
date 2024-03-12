const User = require("../Controller/userSchema");

const CreateUser = async(req,res)=>{
    const {userEmail,userName,phone,designation,gender,course,image}=req.body;
    const Userdetails = await User.create({
        userEmail,userName,phone,designation,gender,course,image
    })
    res.json(Userdetails)
}

module.exports=CreateUser