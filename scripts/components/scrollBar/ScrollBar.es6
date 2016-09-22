class ScrollBar{
  constructor(obj) {
    var template = '\
      <div class="scroll-bar-track">\
        <div class="scroll-bar-thumb">\
        </div>\
      </div>\
    ';
    var element = document.createElement('div');
    element.className = "scroll-bar";
    element.innerHTML = template;
    this.element = element;
    var that = this;
    this.listenEvent();

    setTimeout(function () {
      that.bindView(obj);
    });
  }
  bindView(obj) {
    this.view = obj;
    obj.bar = this;

    this.trackHeight = this.element.offsetHeight;
    this.scrollTop = 0;
    this.thumbHeight = obj.getScrollHeight() * this.trackHeight;
    var thumb = this.element.querySelector(".scroll-bar-thumb");
    this.canScrollHeight = this.trackHeight - this.thumbHeight;
    thumb.style.height = this.thumbHeight + "px";
    thumb.style.top = this.scrollTop + "px";
  }
  updateView() {
    var thumb = this.element.querySelector(".scroll-bar-thumb");
    thumb.style.height = this.thumbHeight + "px";
    thumb.style.top = this.scrollTop + "px";
  }
  trigger(top_percent) {
    this.view.updateView(top_percent);
  }
  scrollDown() {
    var scrollTop = this.scrollTop;
    scrollTop += 20;
    if(scrollTop > this.canScrollHeight) {
      scrollTop = this.canScrollHeight;
    }
    this.scrollTop = scrollTop;
    this.updateView();

    this.trigger(scrollTop / this.trackHeight);
  }
  scrollUp() {
    var scrollTop = this.scrollTop;
    scrollTop -= 20;
    if(scrollTop < 0) {
      scrollTop = 0;
    }
    this.scrollTop = scrollTop;
    this.updateView();
    this.trigger(scrollTop / this.trackHeight);
  }
  listenEvent() {
    var thumb = this.element.querySelector(".scroll-bar-thumb");
    var that = this;

    window.addEventListener("mousewheel", function () {
      /**
       * 往下翻 deltaY 为53
       * 往上翻 deltaY 为-53
       */
      if(event.deltaY > 0) {
        that.scrollDown();
      } else {
        that.scrollUp();
      }
    });
    window.addEventListener("DOMMouseScroll", function (event) {
      /**
       * 往下翻 detail 为3
       * 往上翻 detail 为-3
       */
      console.log(event.detail)
    });

    thumb.addEventListener("mousedown", function (event) {
      var originalClientY = event.clientY;
      var originalScrollTop = that.scrollTop;

      {
        let mousemove = function (event) {
          var clientY = event.clientY;
          var scrollY = clientY - originalClientY + originalScrollTop;

          if(scrollY > that.canScrollHeight) {
            scrollY = that.canScrollHeight;
          } else if (scrollY < 0) {
            scrollY = 0;
          }
          that.scrollTop = scrollY;
          thumb.style.top = scrollY + "px";

          that.trigger(scrollY / that.trackHeight);
        };
        window.addEventListener("mousemove", mousemove);

        let mouseup = function () {
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
        };
        window.addEventListener("mouseup", mouseup);
      }
    });
  }
}

module.exports = ScrollBar;