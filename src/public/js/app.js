define(function (require, exports, module) {

	var App = function (config) {
		if(config.debug) {
			console.log('App started');
		}
	};

	exports = App;

	return exports;
});