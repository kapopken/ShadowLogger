(function(){
	'use strict';
	var app = angular.module('shadowLoggerExample',['shadowLogger']);
	app.config(config);
	app.$inject = 'shadowLoggerProvider';
	function config(shadowLoggerProvider){
		
		shadowLoggerProvider.setOptions({
				 ajaxOptions: {
                     url:""
                },
			 additionalData: {
                    ApplicationName: '',
                    MachineName:"",
                    UserName: "",
                    Category: 'Client',
                    ExceptionType: 0,
                    SessionId:0
                }
		});
	}
})();
