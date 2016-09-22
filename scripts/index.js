/**
 * Created by mingtao on 7/12/16.
 */

require("../styles/index.scss");
require("./components/card/style/Card.scss");
require("./components/scrollBar/style/ScrollBar.scss");
require("./components/scrollObject/style/scrollObject.scss");

var Card = require("./components/card/Card.es6");
var ScrollBar = require("./components/scrollBar/ScrollBar.es6");
var ScrollObject = require("./components/scrollObject/ScrollObject.es6");


window.onload = function () {
  var body = document.querySelector(".body");
  var scrollObject = new ScrollObject();
  var scrollBar = new ScrollBar(scrollObject);
  body.appendChild(scrollBar.element);
  body.appendChild(scrollObject.element);

  var card = new Card({
    title: "绅士",
    color: ["#cceaf4", "#f6f3e4"],
    time: "06.23",
    text: "我能送你回家吗？可能外面要下雨啦。我能给你个拥抱，像朋友一样可以吗？"
  });
  var card2 = new Card({
    title: "末班车",
    color: ["#a5966b", "#f06348", "#003c51"],
    time: "12.05",
    text: "空着手，犹如你来的时候。紧皱的额头，终于再没有苦痛。"
  });
  var card3 = new Card({
    title: "浙江温州江南皮革厂倒闭了",
    color: ["#f16170", "#f9c450", "#2b6a9f", "#7da54f"],
    time: "08.05",
    text: "王八蛋黄鹤老板吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。"
  });
  var card4 = new Card({
    title: "浙江温州江南皮革厂倒闭了",
    color: ["#f16170", "#f9c450", "#2b6a9f", "#7da54f"],
    time: "08.05",
    text: "王八蛋黄鹤老板吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。"
  });
  var card5 = new Card({
    title: "浙江温州江南皮革厂倒闭了",
    color: ["#f16170", "#f9c450", "#2b6a9f", "#7da54f"],
    time: "08.05",
    text: "王八蛋黄鹤老板吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。"
  });
  var card6 = new Card({
    title: "浙江温州江南皮革厂倒闭了",
    color: ["#f16170", "#f9c450", "#2b6a9f", "#7da54f"],
    time: "08.05",
    text: "王八蛋黄鹤老板吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。"
  });
  var card7 = new Card({
    title: "浙江温州江南皮革厂倒闭了",
    color: ["#f16170", "#f9c450", "#2b6a9f", "#7da54f"],
    time: "08.05",
    text: "王八蛋黄鹤老板吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。"
  });

  scrollObject.addItems([
    card, card2, card3, card4, card5, card6, card7
  ]);

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
};
