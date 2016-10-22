var Panel = require("../panel/Panel");
var ColorList = require("../colorList/ColorList");
var ColorPicker = require("../colorPicker/ColorPicker");
var Cropper = require("../cropper/Cropper");
var utils = require("../../utils/utils");

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
				<div class="btn-container">\
					<button class="op-btn cancel">取消</button\
					><button class="op-btn confirm">确定</button>\
				</div>\
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

		this.cropper = cropper;
		this.colorList = colorList;
		this.title = this.element.querySelector("[name=title]");
		this.desc = this.element.querySelector("[name=desc]");

		this.listenEvent();
	}

	listenEvent() {
		super.listenEvent();
		var that = this;
		this.element.querySelector(".confirm").addEventListener("click", function() {
			that.post();
		});
	}

	post() {
		var that = this;

		var colors = this.colorList.getValue();
		var title = this.title.value;
		var desc = this.desc.value;
		this.cropper.getValue().then(function(data) {
			utils.post(
				"/item/", 
				{
					title: title,
					desc: desc,
					image: data,
					colors: colors.toString()
				},
				function(data) {
					console.log(data)
					that.close();
				}
			);
		});
	}
}

module.exports = CardPanel;
