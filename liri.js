// import { createServer } from "http";
// import { twitter } from "./keys";




var [, , ...input] = process.argv;
var rq = require("dotenv").config();
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var fs = require('fs');

// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);


console.log('Liri page is working now')
console.log("my-tweets, spotify-this-song, movie-this, do-what-it-says");

// var userCommand = process.argv[2];
// var secondCommand = process.argv[3];

// for (i = 4; i < process.argv.length; i++) {
//     secondCommand += '+' + process.argv[i];
// }


//Twitter responder
// var client = new Twitter(keys.twitter;)

function fetchTweets() {
    console.log("This is the Tweet's!");

    var client = new twitter({
        consumer_key: key.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterkeys.access_token_secret,


    });


    var parameters = {
        screen_name: 'multishifities',
        count: 20
    };

    client.get('statuses/user_timeline', parameters, function (err, tweets, response) {
        if (!err) {
            for (i = 0; i < tweets.length; i++) {
                var returnedData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(returnedData);
                console.log('---------------------');
            }
        };
    });
};

function movie() {
    var movieName = "";
    for (var i = 2; i < input.length; i++) {

        if (i > 2 && i < input.length) {
            movieName = movieName + "+" + input[i];
        } else {
            movieName += input[i];
        }
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        
        request(queryURl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("Release Year: " + JSON.parse(body).Year + " The movie's rating is " + JSON.parse(body).imdbRating);
            }
        });
    }
}

//Spotify resonder
function spotifyMe() {
    var spotify = new spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'atomic dog', limit: 20 }, function (err, data) {
        if (err) {
            return console.log('404 has occurred: ' + err)
        }
        console.log(data);
    });
}

function followTheTextbook() {
    fs.readFile('randome.txt', "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        //comma separation
        var output = data.split(',');
        //for loop through the new output array
        for (var i = 0; i < output.length; i++) {
            var play = output[(Math.floor(Math.random() * outplut.length) == 0)]
        }
        console.log(play);

    });
}
function home() {
    console.log('Gone Home')
}

// switch statement
switch(input[0].toString()) {
    case 'my-tweets':
        fetchTweets();
        break;

    case 'spotify-this-song':
        spotifyMe();
        break;

    case 'movie-this':
        movie();
        break;

    case 'do-what-it-says':
        followTheTextbook();
        break;

    default: 
        home();
        break;
};



