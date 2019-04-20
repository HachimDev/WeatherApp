const request = require("request");

let options = "?";
options += "units=si";
options += "&lang=fr";

let city = "marrakech";
let parsedCoordonates = '';

const KEY = "ea2726111b8081696ecf44c98e89a876";
const BASE_URL = "https://api.darksky.net/forecast/";

// /* From City String to Coordinates */
// const BaseUrlMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
// const MapBoxToken = "pk.eyJ1IjoiaGFjaGltZGV2IiwiYSI6ImNqdXBkdWdoMzBhYXI0NHA2dHplbnc5YXkifQ.HWGbR3XrJSIQRRlzxdekVg"
// let MapBoxOptions = "&";
// MapBoxOptions += "limit=1";

// const URLMAPBOX = BaseUrlMapBox + city + ".json?access_token=" + MapBoxToken + MapBoxOptions;
// request({url: URLMAPBOX, json: true}, (error, response)=>{
//     let coordinates = response.body.features[0].center;
//     parsedCoordonates =  coordinates.join(',')
// });


const URL = BASE_URL + KEY + '/'+ '37.8267,-122.4233' + options;

request({ url: URL, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to Weather service');
    }else {
        const body = response.body.currently;
        console.log("It is currently " + body.temperature + " degrees in "+ city +". There is a " + body.precipProbability + "% chance of rain.");
    }
  });