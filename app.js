require('dotenv').config();

var express  = require('express'),
    mongoose = require('mongoose'),
    Twitter  = require('twitter'),
    app      = express();

console.log(process.env.hello);

var client = new Twitter({
  consumer_key: process.env.twitterKey,
  consumer_secret: process.env.twitterSecret,
  access_token_key: process.env.twitterToken,
  access_token_secret: process.env.twitterTokenSecret
});

app.get('/', function(req, res){
  client.get('https://api.twitter.com/1.1/search/tweets.json?q=macbook&count=10', function(error, tweets, response) {
  if(error) console.log(error);
  //console.log(tweets);  // The
  tweets.statuses.forEach(function(tweet){
    console.log(tweet.text);
    console.log('By: ' + tweet.user.name);
  })
  //console.log(response);  // Raw response object.
  res.send(tweets.statuses);
});
});


app.listen('5000', function(){
  console.log('Running');
});
