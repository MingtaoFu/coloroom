var Panel = require("../panel/Panel");
var ColorList = require("../colorList/ColorList");
var ColorPicker = require("../colorPicker/ColorPicker");
var Cropper = require("../cropper/Cropper");

class CardPanel extends Panel {
	constructor(obj) {
		var panel_body_template = '\
			<div class="panel-body-half left">\
				<input class="form-control" name="title"\
					placeholder="请输入名称">\
				<textarea class="form-control" name="desc"\
					placeholder="描述一下你的配色盘" novalidation></textarea>\
				<cropper></cropper>\
			</div>\
			<div class="panel-body-half right">\
				<label class="form-control" name="label">\
					选择你的配色\
				</label>\
				<color-list class="form-control"></color-list>\
				<color-picker class="form-control"></color-picker>\
			</div>\
		';

		super({
			title: obj.title,
			body: panel_body_template
		});

		var cropper = new Cropper();
		var colorPicker = new ColorPicker();
		var colorList = new ColorList();
		{
			let ele = this.element.querySelector("cropper");
			cropper.element.className += " " + ele.className;
			ele.parentNode.replaceChild(cropper.element, ele);
		}
		{
			let ele = this.element.querySelector("color-picker");
			colorPicker.element.className += " " + ele.className;
			ele.parentNode.replaceChild(colorPicker.element, ele);
		}
		{
			let ele = this.element.querySelector("color-list");
			colorList.element.className += " " + ele.className;
			colorList.setController(colorPicker);
			ele.parentNode.replaceChild(colorList.element, ele);
		}
	}
}

module.exports = CardPanel;
