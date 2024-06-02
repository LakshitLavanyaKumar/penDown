// hjere we are going to create the app server which we will visit through browser
require('dotenv').config();//now we are able to use .env file in all applications

const express = require('express');


const expressLayout = require('express-ejs-layouts');
//const methodOverride = require('method-overrride');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const connectDB = require('./server/config/db');
const app = express();//my express app is created
const PORT = 3000 || process.env.PORT;// webserver should list to this port for incoming connections


// //connect to database
connectDB();

app.use(express.urlencoded({ extended:true}));//parses my URL encoded data into accessible form
app.use(express.static('public'));//to swrve all the css ,images files frfom the public directory




//templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/main'));
// //app.use('/',require('./server/routes/admin'));


app.listen(PORT,()=>{
console.log('App listening on port '+PORT);
});