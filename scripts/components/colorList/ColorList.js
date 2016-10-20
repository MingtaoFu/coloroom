require("./style/ColorList.scss");

class ColorList {
	constructor(list) {
		var template = '\
			<button class="color-item">+</button>\
		';

		var element = document.createElement("div");
		element.className = "color-list";
		element.innerHTML = template;
		this.element = element;
	}

	listenEvent() {

	}

	del(index) {
	}

	add() {
	}
}

module.exports = ColorList;
