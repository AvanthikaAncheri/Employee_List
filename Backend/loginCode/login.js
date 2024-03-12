const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const Signup = require("../Controller/loginSchema");


const Tokens2 = async (req,res) =>{

    const {Email,Password} = req.body;
    const Userdata = await Signup.findOne({ Email });

    if(Userdata && (await bcrypt.compare(Password,Userdata.Password))){
        res.json({message:"success",TokenGenerate:generateToken(Userdata._id)});
    }
    else
    {
        res.json("failed")
    }
}

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

module.exports = Tokens2
