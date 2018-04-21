// import { twitter } from "./keys";



require("dotenv").config();

var textFile = process.argv;
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var fs = require('fs');

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);


console.log('Liri page is working now')
console.log("my-tweets, spotify-this-song, movie-this, do-what-it-says");

var userCommand = process.argv[2];
var secondCommand = process.argv[3];

for (i = 4; i < process.argv.length; i++) {
     secondCommand += '+' + process.argv[i];
    
}

function theGreatSwitch() { switch(userCommand){ case 'my-tweets': fetchTweets(); break}};








