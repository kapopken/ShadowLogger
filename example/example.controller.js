(function(){
	'use strict';
	var controller = angular.module('shadowLoggerExample').controller('exampleController',exampleController);
	controller.$inject =['$log'];
	function exampleController($log){
		this.log = log;
		this.radioGroup = '';
		function log(){
			switch(this.radioGroup){
				case 'log':
					$log.log('blah');
					break;
				case 'debug':
					$log.debug('debug');
					break;
				case 'warn':
					$log.warn('warn');
					break;
				case 'info':
					$log.info('info');
			}
		}
	}
})();
