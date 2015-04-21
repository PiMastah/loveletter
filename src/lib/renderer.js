define(function (require, exports, module) {
	$ = require('jquery');
	//based on https://gist.github.com/akorchev/860240
	var Resig3Parser = (function(exports) {
		exports = function tmpl(str) {
			var value = "var out = ''; out+=" + "'" +
			str.replace(/[\r\t\n]/g," ")
				.replace(/'(?=[^%]*%>)/g,"\t")
				.split("'").join("\\'")
				.split("\t").join("'")
				.replace(/<%=(.+?)%>/g, "'; out += $1; out += '")
				.split("<%").join("';")
				.split("%>").join("out+='")
				+ "';return out;";
			return new Function("data", value);
	}
	;
		return exports;
	})({});

	var TemplateHandler = (function(exports, parse) {
		function Templates(config) {
			this.tplCache = {};
			this.config = config || {};
		}

		Templates.prototype.render = function(tpl, data) {
			var me = this
			,	fn = me.parse(tpl)
			;
			return fn ? fn(data).replace(/\s+$/, "") : '';
		};

		Templates.prototype.parse = parse;

		exports = function(config) {
			return new Templates(config);
		};

		return exports;
	})({}, Resig3Parser);

	var handler = new TemplateHandler({});

	$.render = function(tpl, data) {
		return handler.render(tpl, data);
	}

	$.fn.render = function(tpl, data) {
		var result = handler.render(tpl, data);
		return this.each(function() {
			$(this).html(result);
		});
	};
});