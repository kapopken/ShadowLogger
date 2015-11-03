(function () {
    "use strict";
    var app = angular.module('kpShadowLogger', []);
    app.config(config);
    config.$inject = ['$provide'];
	function config($provide){
	    $provide.decorator('$log', logDecorator);
		logDecorator.$inject = ['$delegate','shadowLogger'];
    	
		function logDecorator($delegate,shadowLogger){
			 return {
				 error:function(exception,message){
					 $delegate.error(exception,message);
					 shadowLogger.error(exception,message);
				 },
				 info:function(message){
					 $delegate.info(message);
					 shadowLogger.info(message);
				 },
				 warn:function(message){
					  $delegate.warn(message);
					 shadowLogger.warn(message);
				 },
				debug:function(message){
					  $delegate.debug(message);
					 shadowLogger.debug(message);
				 },
				 log:function(message){
					  $delegate.log(message);
					 shadowLogger.info(message);
				 }
			 };
		}
	}
})();
