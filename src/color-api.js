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


// input: [[44, 43, 44], "N", "N", "N"] use for input suggestion
// 'http://colormind.io/list/' should show color ids
