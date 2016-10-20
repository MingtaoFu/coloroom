var $ = require("jquery");
var Croppie = require("croppie");
require("croppie/croppie.css");
require("./style/Cropper.scss");

class Cropper {
	constructor() {
		var template = '\
			<div data-plugin></div>\
			<button class="cropper-upload iconfont">\
				&#xe603;\
				<input type="file" accept="image/gif, image/jpeg, image/png">\
			</button>\
		';

		var element = document.createElement("div");
		element.className = "cropper";
		element.innerHTML = template;
		this.element = element;

		{
			let c = new Croppie(element.querySelector("[data-plugin]"), {
				//showZoomer: false,
				//url: '/images/t.png',
				viewport: {
					width: 240,
					height: 162
				},
				boundary: {
					width: 240,
					height: 162
				}
			});

			let fileReader = new FileReader();
			fileReader.onload = function(e) {
				c.bind({
					url: e.target.result
				});
			};
			let fileReaderFilter = /^(?:image\/jpeg|image\/png|image\/gif)$/i;
			element.querySelector("[type=file]").addEventListener("change", function(e) {
				var file = this.files[0];
				if(!fileReaderFilter.test(file.type)) {
					alert("类型错误");
				} else {
					fileReader.readAsDataURL(file);
				}
			});
		}
	}
}

module.exports = Cropper;
