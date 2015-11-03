##Overview
This minimally invasive provider allows for all exceptions and log messages to easily be sent to a server with minimul configuration.
When angular catches an uncaught exception this will be logged as well to the server.

## Adding the module
	var app = angular.module('app',['shadowLogger']);

## Configure
app.config(config);
	app.$inject = 'shadowLoggerProvider';
	function config(shadowLoggerProvider){
		
		shadowLoggerProvider.setOptions(options);
}
##usage
  just use $log.  It will interecept all the calls.  Do the normal angular log and then log to the server depending on your options set.
  $log.warn, $log.info, $log.error,$log.debug
  
## API
  available options;
    var traceLevels = {
        error:1,
        warn:2,
        info:3,
        log:4,
        debug:5
  };
  var options = {
          traceLevel:5,   --maximum trace level to log to server  IE if you want to log errors and warnings set this to 2;
          additionalData:{ --add whatever you need.  these will be appended to the data that will be sent to the server
            machineName:''
          },
          ajaxOptions:{  --normal ajax options  url is required
            
          }
    };
	
 