const express = require("express");
const app = express();
const mongoose = require('mongoose');
// var url = "mongodb+srv://admin:asd12345678@blog-project-t26yh.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect('mongodb+srv://admin:asd12345678@blog-project-t26yh.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true},function(error){
        if(error){
            console.log(error);
        }else{
            console.log('db connected');
        }
});

// Creating Routes
app.get("/", function(req, res){
    res.send("Welcome to home page")
});
app.get("/hello", function(req, res){
    res.send("Welcome to hello pages")
});

app.listen(3005, function(){
    console.log("Successful, Running on port 3005")
});