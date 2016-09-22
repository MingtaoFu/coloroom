class ScrollObject{
  constructor() {
    var template = '\
      <div class="scroll-obj"></div>\
    ';
    var element = document.createElement("div");
    element.innerHTML = template;
    element.className = "scroll-obj-container";
    this.element = element;
    this.updateHeight();
  }
  updateHeight() {
    var element = this.element;
    var updateSize = function () {
      element.style.height = window.innerHeight - 130 + "px";
    };
    window.addEventListener('resize', function () {
      updateSize();
    });
    updateSize();
  }
  addItems(arr) {
    var scrollObj = this.element.querySelector(".scroll-obj");
    for(let i = 0; i < arr.length; i++) {
      scrollObj.appendChild(arr[i].element);
    }
  }
  getScrollHeight() {
    var scrollObj = this.element.querySelector(".scroll-obj");
    return this.element.offsetHeight / scrollObj.offsetHeight;
  }
  updateView(top_percent) {
    var scrollObj = this.element.querySelector(".scroll-obj");
    scrollObj.style.top = -top_percent * scrollObj.offsetHeight + "px";
  }
  scrollDown(value) {
    var scrollObj = this.element.querySelector(".scroll-obj");
    scrollObj.style.top = value + "px";
  }
  scrollUp() {
  }
}

module.exports = ScrollObject;