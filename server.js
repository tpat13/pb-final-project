//Budget API
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/DB/Connection');


const app = express();
const port = 2000;

connectDB();
//app.use('/api/userModel', require('./API/User'));

//week 5
app.use(cors());

//week 4
app.use('/', express.static('public'));
const budget = require("./categories"); 


//request to "/budget"
app.get('/', (req, res) => {
    res.json(budget);
    

});


app.listen(port, () => {
    console.log (`API Served at http://localhost:${port}`);
});

