const Budget =require('./../models/budgetSchema'); 
 
 
const getBudget=(req,res)=>{ 
 
 Budget.find() 
 .then(result=>{ 
 console.log('result: ',result) 
 res.send(result.length>0?result:'error'); 
 }) 
 .catch(err=>{ 
 console.log(err); 
 }) 
} 
 
module.exports={ 
 getBudget
} 