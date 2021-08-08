import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Satellite } from './static';
//import { createMap } from "./map";

function getData(response) {
  $('#sat-about').text(`The ${response.name} ID number is ${response.id}`);
  $('#show-lon').text(`The longitude of the ${response.name} is ${response.longitude}`);
  $('#show-lat').text(`The latitude of the ${response.name} is ${response.latitude}`);
}

$(document).ready(function() {
  $('.button').click(function() {
    Satellite.getSatellite()
      .then(function(response) {
        getData(response);
        let lon = response.longitude;
        let lat = response.latitude;
        $('#issmap').append(`<iframe
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=""&center=${lat},${lon}">
          </iframe>`);
        //createMap(lat, lon);
      });
  });
});