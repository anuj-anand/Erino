const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Erino";


const dbConnect = async()=>{
    try{
        await mongoose.connect(uri
        );
        console.log("DB Connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;