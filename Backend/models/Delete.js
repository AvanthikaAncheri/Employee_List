const User = require("../Controller/userSchema")

const Delete = async(req,res)=>
{
    const _id=req.params.id
    const User1=await User.findByIdAndDelete(_id)
    res.json("user deleted")
}

module.exports=Delete