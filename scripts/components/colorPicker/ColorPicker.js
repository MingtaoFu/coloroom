var $ = require("jquery");
require("spectrum-colorpicker");
require("spectrum-colorpicker/spectrum.css");
require("./style/ColorPicker.scss");

class ColorPicker {
	constructor() {
		var template = '\
			<input data-plugin>\
			<div class="color-input-container">\
				<div class="color-input">\
					<span>#</span>\
					<input>\
					<div class="clear"></div>\
				</div>\
				<div class="color-input">\
					<span>R</span>\
					<input>\
					<div class="clear"></div>\
				</div>\
				<div class="color-input">\
					<span>G</span>\
					<input>\
					<div class="clear"></div>\
				</div>\
				<div class="color-input">\
					<span>B</span>\
					<input>\
					<div class="clear"></div>\
				</div>\
			</div>\
		';
		var element = document.createElement("div");
		element.className = "color-picker";
		element.innerHTML = template;

		{
			$("[data-plugin]", element).spectrum({
				flat: true,
				showButtons: false,
				containerClassName: 'picker-container'
			});
		}

		this.element = element;
	}
}

module.exports = ColorPicker;
