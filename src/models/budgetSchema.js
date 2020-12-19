const mongoose=require('mongoose'); 
 
const budgetSchema=mongoose.Schema({ 
 name:{ 
 type:String, 
 required:true 
 }, 
 status:{ 
 type:Number, 
 required:true 
 } 
},{timestamps:true}) 
 
const Todo=mongoose.model('budget',budgetSchema); 
module.exports=Todo; 