//Budget API
const express = require('express');
const cors = require('cors');
const connectDB = require('../src/DB/Connection');



const app = express();
const port = 2000;

connectDB();
//app.use('/api/userModel', require('./API/User'));


const todoController=require('./controllers/fetchBudget.js'); 
const router=express.Router(); 
module.exports=router.get('/view-budget',todoController.getBudget); 


app.use(cors());


app.use('/', express.static('public'));
const budget = require("./categories"); 


//request to "/budget"
app.get('/budget', (req, res) => {
    
    res.json(budget);
    

});


app.listen(port, () => {
    console.log (`API Served at http://localhost:${port}`);
});

