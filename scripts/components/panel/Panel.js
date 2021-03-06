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
		element.setAttribute("close", "true");
		element.innerHTML = template;
		this.element = element;
	}

	close() {
		var that = this;
		this.element.setAttribute("close", "true");
		setTimeout(function() {
			that.element.style.display = "none";
		}, 150);
	}

	open() {
		var that = this;
		this.element.style.display = "block";
		setTimeout(function() {
			that.element.setAttribute("close", "false");
		}, 1);
	}

	listenEvent() {
		var that = this;
		this.element.querySelector(".panel-close").addEventListener("click", function() {
			that.close();
		});
	}
}

module.exports = Panel;
