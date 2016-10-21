class Panel {
	constructor(obj) {
		var template = '\
			<div class="panel">\
				<div class="panel-header">\
					<button type="button" class="panel-close iconfont">&#xe601;</button>\
					<h4 class="panel-title">{{title}}</h4>\
				</div>\
				<div class="panel-body">\
					{{body}}\
				</div>\
			</div>\
		';

		{
			let fields = Object.keys(obj);
			for(let i in fields) {
				if(!fields.hasOwnProperty(i)) {
					console.error("Error happens in param.");
					continue;
				}
        let pattern = new RegExp("\{\{" + fields[i] + "}}", "g");
        template = template.replace(pattern, obj[fields[i]]);
      }
    }

		var element = document.createElement('div');
		element.className = "panel-mask";
		element.innerHTML = template;
		this.element = element;
	}
}

module.exports = Panel;
