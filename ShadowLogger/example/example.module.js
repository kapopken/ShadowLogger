(function(){
	"use strict"
	var app = angular.module('shadowLoggerExample',["shadowLogger"]);
	app.config(config);
	app.$inject = 'shadowLoggerProvider';
	function config(shadowLoggerProvider){
		
		shadowLoggerProvider.setOptions({logAlert:true});
	}
})();
