const mongoose=require("mongoose");
const url="mongodb+srv://priya678:priya678@cluster0.5zpkp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB=async()=>{
try{
  const con=await mongoose.connect(url,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify:false
    })
console.log(`MongoDb connected:${con.connection.host}`);
}

catch(error){
console.log(error);
}
}

module.exports=connectDB;