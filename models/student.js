

const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name:String,
        age:Number,
        contactno:Number
    },{
        timestamps:true,
    }
)
const Student=mongoose.model('users',userSchema)


module.exports=Student;