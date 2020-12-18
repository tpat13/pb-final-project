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

/* const budget = {
    myBudget: [
    {

        title: 'Eat out',
        budget: 30
    },

    {
        title: 'Rent',
        budget: 350
    },

    {
        title: 'Groceries',
        budget: 90
    }
    ]
}; */

/* //routes
app.get('/hello', (req, res) => {
    res.send('Hello World!');
}); */


//request to "/budget"
app.get('/budget', (req, res) => {
    res.json(budget);
    

});


app.listen(port, () => {
    console.log (`API Served at http://localhost:${port}`);
});

