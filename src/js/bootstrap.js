(function () {
	var self = this;

	require.config({
		paths: {
			"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
			"underscore": "../lib/underscore",
			"text": "../lib/text",
			"jquery.bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
			"jquery.renderer": "../lib/renderer",
		},
		shim: {
			"jquery": {
				exports: "$"
			}
			, "underscore": {
				exports: "_"
			}
			, "jquery.renderer": {
				deps: ["jquery"]
			}
			, "jquery.bootstrap": {
				deps: ["jquery", "underscore"]
			}
		}
	});

	require(['underscore', 'jquery', 'app', 'config', 'jquery.renderer', 'jquery.bootstrap'], function (_, $, App, config) {

		app = new App(config);
	});
})();
