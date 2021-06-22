const mongoose=require("mongoose");
const mentorSchema=new mongoose.Schema(
    {
        name:String,
        age:Number,
        contactno:Number,
        experience:{
    type:Number,
    default:0,
        },
    students_name:[],
    
    },
    {
  timestamps:true,
    }
)
const Mentor=mongoose.model("mentors",mentorSchema);
module.exports=Mentor;

