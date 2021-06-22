const express=require("express");
const connectDB=require("./config/db");
const mentorRouter=require("./routes/mentor");
const userRouter=require("./routes/student");

const app=express();
connectDB();
app.use(express.json());
app.use("/mentor",mentorRouter);
app.use("/student",userRouter);


app.get("/",(req,res)=>{
    res.send("server started");
})
app.listen(5000,()=>{
    console.log("Server has been started");
})