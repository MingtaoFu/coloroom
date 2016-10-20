var $ = require("jquery");
require("spectrum-colorpicker");
require("spectrum-colorpicker/spectrum.css");
require("./style/ColorPicker.scss");

class ColorPicker {
	constructor() {
		var template = '\
			<input data-plugin>\
			<div class="color-input-container">\
				<form class="color-input color-hex color-hex-form">\
					<span>#</span>\
					<input name="hex">\
					<div class="clear"></div>\
				</form>\
				<form class="color-rgb-form" action="">\
					<div class="color-input">\
						<span>R</span>\
						<input name="rgb_r">\
						<div class="clear"></div>\
					</div>\
					<div class="color-input">\
						<span>G</span>\
						<input name="rgb_g">\
						<div class="clear"></div>\
					</div>\
					<div class="color-input">\
						<span>B</span>\
						<input name="rgb_b">\
						<div class="clear"></div>\
					</div>\
					<input type="submit" style="display:none">\
				</form>\
			</div>\
		';
		var element = document.createElement("div");
		element.className = "color-picker";
		element.innerHTML = template;

		{
			let rgb_form = element.querySelector(".color-rgb-form");
			let	hex_form = element.querySelector(".color-hex-form")

			this.plugin_ele = $("[data-plugin]", element);
			this.plugin_ele.spectrum({
				flat: true,
				showButtons: false,
				containerClassName: 'picker-container',
				move: function(color) {
					rgb_form.rgb_r.value = color.toRgb().r;
					rgb_form.rgb_g.value = color.toRgb().g;
					rgb_form.rgb_b.value = color.toRgb().b;

					hex_form.hex.value = color.toHex();
				}
			});
		}

		this.element = element;
		this.listenEvent();
	}

	listenEvent() {
		var that = this;
		var rgb_form = this.element.querySelector(".color-rgb-form");
		rgb_form.addEventListener("submit", function(e) {
			e.preventDefault();
			let ele = e.target;
			let value = "rgb(" + ele.rgb_r.value + "," + ele.rgb_g.value + "," + ele.rgb_b.value + ")";
			that.plugin_ele.spectrum("set", value);
			//it shows that how bad the plugin is
			that.plugin_ele.spectrum("show");

			let hex = that.plugin_ele.spectrum("get").toHex();
			hex_form.hex.value = hex;
		});

		var hex_form = this.element.querySelector(".color-hex-form")
		hex_form.addEventListener("submit", function(e) {
			e.preventDefault();
			let ele = e.target;
			that.plugin_ele.spectrum("set", ele.hex.value);
			//it shows that how bad the plugin is
			that.plugin_ele.spectrum("show");

			let rgb = that.plugin_ele.spectrum("get").toRgb();
			rgb_form.rgb_r.value = rgb.r;
			rgb_form.rgb_g.value = rgb.g;
			rgb_form.rgb_b.value = rgb.b;
		});
	}
}

module.exports = ColorPicker;
