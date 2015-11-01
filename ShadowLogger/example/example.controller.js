(function(){
		"use strict"
	var controller = angular.module('shadowLoggerExample').controller('exampleController',exampleController);
	controller.$inject ='$log';
	function exampleController($log){
		var vm = this;
		this.log = log;
		this.radioGroup = "";
		function log(){
			var selection = this.radioGroup;
			switch(this.radioGroup){
				case "log":
					$log.log('blah');
					break;
				case "debug":
					$log.debug('debug');
					break;
				case "warn":
					$log.warn('warn');
					break;
				case "info":
					$log.info("info");
			}
		}
	};
	
})();
