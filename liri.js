import { twitter } from "./keys";

require("dotenv").config();

var textFile = process.argv[2];
var keys = require('keys.js');

keys.readFile(textFile, 'Spotify this song', function(err){
    if (err){
        console.log (err)
    }
    else {
        console.log('This is beginnig to work')
    }
})


var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);





