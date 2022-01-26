import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorPicker from './color-api';

$(document).ready(function () {
  $("#colorSubmit").submit(function (event) {
    event.preventDefault();
    // let userRgbSelect = word => word.match(/[A-Za-z0-9]{2}/g).map(element => parseInt(element, 16))
    let promise = ColorPicker.getColorSuggestion(/*userRgbSelect(userSelection)*/);
    promise.then(function (response) {
      const body = JSON.parse(response);
      // console.log("body", body.result); /*for api body results if needed re comment the before code*/
      let colorValue1 = body.result[0];
      let colorValue2 = body.result[1];
      let colorValue3 = body.result[2];
      let colorValue4 = body.result[3];
      $("#color1").css("background-color", `rgb(${colorValue1})`);
      $("#color1Id").text(colorValue1);
      $("#color2").css("background-color", `rgb(${colorValue2})`);
      $("#color2Id").text(colorValue2);
      $("#color3").css("background-color", `rgb(${colorValue3})`);
      $("#color3Id").text(colorValue3);
      $("#color4").css("background-color", `rgb(${colorValue4})`);
      $("#color4Id").text(colorValue4);
    }, function (error) {
      console.log("error", error);
    });;
  });
});


