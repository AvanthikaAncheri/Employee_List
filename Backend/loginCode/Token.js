const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt');
const Signup = require('../Controller/loginSchema');

const Tokens=async (req,res)=>{
    const {Name,Email,Password}=req.body;
    const Userdata = await Signup.findOne({ Email });

    if(Userdata)
    {
        res.json("already exists");
    }
    else{

        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(Password,salt)
        
    const Signupdetails=await Signup.create({
        Name,Email,Password:hashpassword
    })

       
    res.json({
        Id:Signupdetails._id,
        Name:Signupdetails.Name,
        Email:Signupdetails.Email,
        Password:Signupdetails.Password,
        Token:tokengenerate(Signupdetails._id),

    });
}}

const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',

    })
}

module.exports=Tokens