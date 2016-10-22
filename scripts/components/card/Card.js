var utils = require("../../utils/utils");

class Card {
  constructor(obj) {
    var template = '\
        <header>\
          <span class="title">{{title}}</span\
          ><span class="time">{{time}}</span>\
        </header>\
        <div class="body">\
          <div>\
            <section class="left">\
              <img src="{{image}}">\
            </section\
            ><section class="right">\
              ``color``\
            </section>\
          </div>\
          <p class="text">{{text}}</p>\
        </div>\
        <footer>\
					<button class="iconfont icon-edit">&#xe602;</button>\
					<button class="iconfont icon-delete">&#xe606;</button>\
				</footer>\
      ';

    {
      let fields = Object.keys(obj);
      for(let i in fields) {
        if(!fields.hasOwnProperty(i)) {
          console.error("Error happens in param.");
          continue;
        }
        let pattern = new RegExp("\{\{" + fields[i] + "}}", "g");
        template = template.replace(pattern, obj[fields[i]]);
      }
    }

    // render colors
    {
      if(obj.color) {
        let str = '';
        let len = obj.color.length;

        if(len <= 4 && len >= 2) {
          for(let i in obj.color) {
              if(!obj.color.hasOwnProperty(i)) {
                console.error("Error happens in color.");
                continue;
              }
              str += '<div class="color color-'+ len +'-' + i + '" style="background-color:' + obj.color[i] +
                '"></div>';
            }

        } else {
          console.error("color.length is invalid.");
        }

        template = template.replace(/``color``/, str);

      } else {
        console.error("color needed.");
      }
    }

    var element = document.createElement('div');
    element.className = "card";
		this.id = obj.id;
    element.innerHTML = template;
    this.element = element;
    this.listenEvent();
  }
  listenEvent() {
		/*
    this.element.draggable = true;
    this.element.addEventListener("dragstart", function (e) {
      var that = this;
      setTimeout(function () {
        //that.parentNode.removeChild(that)
        that.style.opacity = 0;
      },1)
      console.log(e)
    });
    this.element.addEventListener("dragenter", function (e) {
      console.log(e)
    });
		*/
		var that = this;
		this.element.querySelector(".icon-delete").addEventListener("click", function() {
			if(confirm("确定？") === true) {
				utils.delete("/items/"+that.id, null, function() {
					alert("成功");
				});
			}
		});
  }
}

module.exports = Card;
