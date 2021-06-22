const express=require("express");
const Mentor = require("../models/mentor");
const router=express.Router();

const Student=require("../models/student");

router.get("/",(req,res)=>{
    res.send("Student router is working")
});


    router.post("/add-student-data",async(req,res)=>{
       
           try {
              const user=await Student.insertMany(req.body);
              res.json(user) 
           } catch (error) {
              res.json({msg:error.message}) 
           }
           })

           router.post("/add/:id",async(req,res)=>{
       
            try {
               const session=await Student.startSession();

               const user=new Student(req.body);
               const userDetails=await user.save({session:session});
               const mentorDetails=await Mentor.findByIdAndUpdate(
                { _id:req.params.id},
                {
                    $push:{students_name:userDetails}
                },
               
         
                    
                {new:true}
             
           ).session(session)
               res.json({user:userDetails,mentor:mentorDetails}) 
            } catch (error) {
               res.json({msg:error.message}) 
            }
            })

module.exports=router;