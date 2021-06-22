const express=require("express");
const router=express.Router();
const Mentor=require("../models/mentor");

router.get("/",(req,res)=>{
    res.send("mentor router is working")
});

router.post("/add-mentor-data",async(req,res)=>{
   
    const user=await Mentor.insertMany(req.body)
    res.json(user);
 
})
router.put("/update/students",async(req,res)=>{

  try{ 
    const user=await Mentor.findByIdAndUpdate(
        { _id:req.body.id},
        {
            $push:{  students_name : req.body.student}
        },
        {new:true}
     
          )
          if(user){
            return res.json(user);
            }
            return res.status(404).json({msg:"Mentor was not Found"})
  }catch(error){
      return res.json({msg: error.message});
  }
 
})

router.get("/get/:id",async(req,res)=>{

    try{ 
      const user=await Mentor.findOne({ _id:req.params.id});
      if(user){
      return res.json(user);
      }
      return res.status(404).json({msg:"Mentor was not Found"})
    }catch(error){
        return res.json({msg: error.message});
    }
   
  })

module.exports=router;