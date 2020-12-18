const mongoose = require('mongoose');
const URI = "mongodb+srv://dbUser:dbUser@4166-cluster.tuetb.mongodb.net/database?retryWrites=true&w=majority";

const connectDB = () =>{
     mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected');

};
module.exports = connectDB;
