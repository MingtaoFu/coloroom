require("./style/ColorList.scss");

class ColorList {
	constructor(list) {
		var template = '\
			<div class="color-container"></div\
			><button class="color-item iconfont color-add">&#xe604;</button>\
		';

		var element = document.createElement("div");
		element.className = "color-list";
		element.innerHTML = template;
		this.element = element;

		this.addBtn = element.querySelector(".color-add");
		this.container = element.querySelector(".color-container");
		this.colors = [];

		this.listenEvent();
	}

	setController(ctrl) {
		this.ctrl = ctrl;
		ctrl.setList(this);
	}

	setColor(color) {
		if(this.activeElement) {
			if(!color.match(/(^rgb)|(^#)/)) {
				color = "#" + color;
			}
			this.activeElement.style.backgroundColor = color;
			this.activeElement.obj.color = color.replace("#", "");
		}
	}

	listenEvent() {
		var that = this;
		this.addBtn.addEventListener("click", function() {
			var btn =  document.createElement("button");
			btn.className = "color-item normal";
			btn.style.backgroundColor = "#799999";


			var delBtn = document.createElement("div");
			delBtn.className = "color-del iconfont";
			delBtn.innerHTML = "&#xe601;";
			btn.appendChild(delBtn);

			delBtn.addEventListener("click", function() {
				var obj = btn.obj;
				for(let i = 0; i < that.colors.length; i++) {
					if(that.colors[i] === obj) {
						btn.parentNode.removeChild(btn);
						that.colors.splice(i, 1);

						if(i > 0) {
							that.colors[i-1].ele.focus();
						}

						if(that.colors.length === 3) {
							that.addBtn.style.display = "inline-block";
						}
						break;
					}
				}
			});

			btn.addEventListener("focus", function() {
				that.ctrl.setColor(this.obj.color.replace("#", ""), ["painter", "hex", "rgb"]);
				that.activeElement = this;

				var center = this.offsetLeft + this.offsetWidth / 2;
				that.ctrl.moveArrow(center);
			});
	
			var obj = {
				color: "#799999",
				ele: btn
			};
			btn.obj = obj;

			that.colors.push(obj);
			that.container.appendChild(btn);
			btn.focus();

			if(that.colors.length === 4) {
				this.style.display = "none";
			}
		});
	}

	del(index) {
	}

	add() {
	}
}

module.exports = ColorList;
