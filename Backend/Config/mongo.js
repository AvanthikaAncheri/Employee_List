
const mongoose = require('mongoose')

const connection=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://Avanthika028:Avanthuz028@cluster0.dj0m3mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('DataBase is connected')
    }
    catch(err){
        console.log(`error :${err}`);
        process.exit()
    }
}

module.exports=connection