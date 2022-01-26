export default class ColorPicker {
  static getColorSuggestion() {
    return new Promise(function (resolve, reject) {
      var url = "http://colormind.io/api/";
      var data = {
        model: "default",
        input: ["N", "N", "N", "N"]
      }
      var request = new XMLHttpRequest();
      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("POST", url, true);
      request.send(JSON.stringify(data));
    })
  }
}


// input: affects the color number input "N" to my knowing is random
//model: users color mind api code to smart generate inputs "default" and "ui" work often check api page for more
// 'http://colormind.io/list/' should show color ids
