var $ = require("jquery");
var Croppie = require("croppie");
require("croppie/croppie.css");
require("./style/Cropper.scss");

class Cropper {
	constructor() {
		var template = '\
		';

		var element = document.createElement("div");
		element.innerHTML = template;
		this.element = element;

		{
			var c = new Croppie(element, {
				showZoomer: false,
				url: '/images/t.png',
				viewport: {
					width: 240,
					height: 162
				},
				boundary: {
					width: 240,
					height: 162
				}
			});
		}
	}
}

module.exports = Cropper;
