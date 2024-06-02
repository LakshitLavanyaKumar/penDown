//this file is a modal and scgema for data
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;//(constructor function) schema defines gthe structure of the data to communicate with database

const blogSchema = new Schema({
    title:{
        type:String,
        required:true//mandatory to be filled like in google forms
    },
    subtitle:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
       required:true
    }
},{timestamps:true});//automatically generates crfeatedAt,updatedAt properties for our Blog data


module.exports= mongoose.model('Blog',blogSchema); 