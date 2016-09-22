/**
 * Created by mingtao on 9/22/16.
 */

utils = {
  getJson: function (url, data, callback, callbackError) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300|| xhr.status == 304) {
          var data = JSON.parse(xhr.responseText);
          callback(data);
        } else {
          callbackError();
        }
      }
    };
    xhr.open('get', url);
    xhr.send(data);
  },
  post: function () {
  }
};