require('dotenv').config();

var express  = require('express'),
    mongoose = require('mongoose'),
    Twitter  = require('twitter'),
    app      = express();

console.log(process.env.hello);


app.listen(6000, function(){
  console.log('Running');
});
