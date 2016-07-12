class Card {
  constructor(title) {
    var template = '\
        <header>\
          <span>{{title}}</span\
          ><span>{{time}}</span>\
        </header>\
        <div class="body">\
          <div>\
            <section class="left"></section\
            ><section class="right"></section>\
          </div>\
          <p class="text">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>\
        </div>\
        <footer></footer>\
      ';
    var html = template.replace(/\{\{title}}/g, title);

    var element = document.createElement('div');
    element.className = "card";
    element.innerHTML = html;
    return element;
  }
}

module.exports = Card;