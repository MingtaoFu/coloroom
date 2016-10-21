var $ = require("jquery");
require("spectrum-colorpicker");
require("spectrum-colorpicker/spectrum.css");
require("./style/ColorPicker.scss");

class ColorPicker {
	constructor() {
		var template = '\
			<div class="picker-trangle"></div>\
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
			<div class="clear"></div>\
		';
		var element = document.createElement("div");
		element.className = "color-picker";
		element.innerHTML = template;

		{
			let rgb_form = element.querySelector(".color-rgb-form");
			let	hex_form = element.querySelector(".color-hex-form")

			this.plugin_ele = $("[data-plugin]", element);
			var that = this;
			this.plugin_ele.spectrum({
				flat: true,
				showButtons: false,
				containerClassName: 'picker-container',
				move: function(color) {
					color = color.toHex();
					that.setColor(color, ["hex", "rgb"]);
					that.list.setColor(color);
				}
			});
		}

		this.arrow = element.querySelector(".picker-trangle");
		this.rgb_form = element.querySelector(".color-rgb-form");
		this.hex_form = element.querySelector(".color-hex-form")
		this.element = element;
		this.listenEvent();
	}

	moveArrow(left) {
		this.arrow.style.left = left + "px";
	}

	setList(list) {
		this.list = list;
	}

	setColor(color, mode) {
		var that = this;
		const operation = {
			rgb: function() {
				var rgb;
				if(color && color.match(/^rgb/)) {
					rgb = color;
				} else {
					rgb = that.plugin_ele.spectrum("get").toRgb();
				}
				that.rgb_form.rgb_r.value = rgb.r;
				that.rgb_form.rgb_g.value = rgb.g;
				that.rgb_form.rgb_b.value = rgb.b;
			},
			hex: function() {
				var hex;
				if(color && color.match(/^#/)) {
					hex = color;
				} else {
					hex = that.plugin_ele.spectrum("get").toHex();
				}
				that.hex_form.hex.value = hex;
			},
			painter: function() {
				that.plugin_ele.spectrum("set", color);
				//it shows that how bad the plugin is
				that.plugin_ele.spectrum("show");
			}
		}

		for(let i = 0; i < mode.length; i++) {
			operation[mode[i]]();
		}
	}

	listenEvent() {
		var that = this;
		this.rgb_form.addEventListener("submit", function(e) {
			e.preventDefault();
			let ele = e.target;
			let value = "rgb(" + ele.rgb_r.value + "," + ele.rgb_g.value + "," + ele.rgb_b.value + ")";

			that.setColor(value, ["painter", "hex"]);	
			that.list.setColor(value);
		});

		this.hex_form.addEventListener("submit", function(e) {
			e.preventDefault();
			let ele = e.target;

			that.setColor(ele.hex.value, ["painter", "rgb"]);	
			that.list.setColor(ele.hex.value);
		});
	}
}

module.exports = ColorPicker;
