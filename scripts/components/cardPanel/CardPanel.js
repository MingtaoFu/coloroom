var Panel = require("../panel/Panel");
var ColorList = require("../colorList/ColorList");
var ColorPicker = require("../colorPicker/ColorPicker");

class CardPanel extends Panel {
	constructor(obj) {
		var panel_body_template = '\
			<div class="panel-body-half left">\
				<input class="form-control" name="title"\
					placeholder="请输入名称">\
				<textarea class="form-control" name="desc"\
					placeholder="描述一下你的配色盘"></textarea>\
			</div>\
			<div class="panel-body-half right">\
				<label class="form-control" name="label">\
					选择你的配色\
				</label>\
				<color-list></color-list>\
				<color-picker></color-picker>\
			</div>\
		';

		super({
			title: obj.title,
			body: panel_body_template
		});

		{
			let ele = this.element.querySelector("color-list");
			let colorList = new ColorList();
			ele.parentNode.replaceChild(colorList.element, ele);
		}

		{
			let ele = this.element.querySelector("color-picker");
			let colorPicker = new ColorPicker();
			ele.parentNode.replaceChild(colorPicker.element, ele);
		}
	}
}

module.exports = CardPanel;
