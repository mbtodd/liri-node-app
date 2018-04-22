import { createServer } from "http";

// import { twitter } from "./keys";



require("dotenv").config();

var textFile = process.argv;
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var fs = require('fs');

// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);


console.log('Liri page is working now')
console.log("my-tweets, spotify-this-song, movie-this, do-what-it-says");

var userCommand = process.argv[2];
var secondCommand = process.argv[3];

for (i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];

}

function switchStatement() {
    switch (userCommand) {
        case 'my-tweets':
            fetchTweets();
            break;

        case 'spotify-this-song':
            spotifyMe();
            break;

        case 'movie-this':
            movieMe();
            break;

        case 'do-what-it-says':
            followTheTextbook();
            break;

    }
};

function fetchTweets() {
    console.log("The is the Tweet!");

    var client = new twitter({
        consumer_key: key.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key:keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterkeys.access_token_secret,
        

    });

    
    var parameters = {
        screen_name:'multishifities',
        count: 20
    };

    client.get('statuses/user_timeline', parameters, function (err, tweets, response) {
        if (!err) {
            for ( i = 0; i < tweets.length; i++) {
                var returnedData = ('Number: ' +(i + 1)+ '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(returnedData);
                console.log('---------------------');
            }
        };
    });
};




