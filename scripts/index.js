/**
 * Created by mingtao on 7/12/16.
 */

require("../styles/index.scss");
require("./components/card/style/Card.scss");

var Card = require("./components/card/Card.es6");

window.onload = function () {
  var card = new Card("水岸沙滩");
  document.body.appendChild(card);
};
