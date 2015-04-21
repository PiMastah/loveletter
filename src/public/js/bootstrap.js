(function () {
	var self = this;

	require.config({
		paths: {
			"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
			"underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
			"text": "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
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
		}
	});

	require(['underscore', 'jquery', 'app', 'config', 'jquery.renderer'], function (_, $, App, config) {

		app = new App(config);
	});
})();
