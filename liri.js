// import { twitter } from "./keys";



require("dotenv").config();

var textFile = process.argv;
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var fs = require('fs');

console.log('Liri page is working now')

console.log("my-tweets, spotify-this-song, movie-this, do-what-it-says");


// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);





