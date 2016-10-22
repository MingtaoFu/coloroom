/**
 * Created by mingtao on 7/12/16.
 */

require("../styles/index.scss");
require("./components/card/style/Card.scss");
require("./components/scrollBar/style/ScrollBar.scss");
require("./components/scrollObject/style/scrollObject.scss");
require("./components/cardPanel/style/CardPanel.scss");

var Card = require("./components/card/Card");
var ScrollBar = require("./components/scrollBar/ScrollBar");
var ScrollObject = require("./components/scrollObject/ScrollObject");
var CardPanel = require("./components/cardPanel/CardPanel");
require('./utils/utils');

window.onload = function () {
  var body = document.querySelector(".body");
  var scrollObject = new ScrollObject();
  var scrollBar = new ScrollBar(scrollObject);
  body.appendChild(scrollBar.element);
  body.appendChild(scrollObject.element);

  utils.getJson("/items", {}, function (data) {
		for(let i = 0; i < data.length; i++) {
			var the_data = data[i];
			var param = {
				id: the_data.id,
				title: the_data.title,
				time: "01.25",
				text: the_data.description,
				image: the_data.image,
				color: []
			};

			for(let j = 0; j < the_data.colors.length; j++) {
				param.color.push(the_data.colors[j].hex_value);
			}

			var card = new Card(param);

			scrollObject.addItems([card])
		}
  });

	/*
  function xxxx() {

    card2.style.transform = "translate(100%, 0)";
      var xxx = card.parentNode
      xxx.removeChild(card);
      xxx.appendChild(card);
      setTimeout(function () {
        card2.className = "card tra"
        setTimeout(function () {
          card2.style.transform = "translate(0,0)"
        },1)
      },1)
  }
  window.xxxx = xxxx
  window.card = card;
  window.card2 = card2
	*/

	var cardPanel = new CardPanel({title:"添加色盘"});
	document.body.appendChild(cardPanel.element);

	document.querySelector(".add-btn").addEventListener("click", function() {
		cardPanel.open();
	});
};
