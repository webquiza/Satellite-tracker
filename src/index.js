import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Satellite } from './static';

function getData(response) {
  console.log(response.id);
  $('#sat-about').text(`The ${response.name} ID number is ${response.id}`);
  $('#show-lon').text(`The longitude of the ${response.name} is ${response.longitude}`);
  $('#show-lat').text(`The latitude of the ${response.name} is ${response.latitude}`);
}

$(document).ready(function (){
  $('.button').click(function() {
    Satellite.getSatellite()
      .then(function(response) {
        getData(response);
      });
  });
});
