const User = require("../Controller/userSchema")

const getsingle=async (req,res)=>{
    const _id=req.params.id
    const Userid=await User.findById(_id)
    res.json(Userid)
}

module.exports=getsingle