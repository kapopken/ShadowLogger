##Overview
This minimally invasive provider allows for all exceptions and log messages to easily be sent to a server with minimul configuration.
When angular catches an uncaught exception this will be logged as well to the server.

##INSTALL
	bower install shadowLogger
	var app = angular.module('app',['kpShadowLogger']);


##CONFIGURE
```
app.config(config);
	app.$inject = 'shadowLoggerProvider';
	function config(shadowLoggerProvider){
		
		shadowLoggerProvider.setOptions(options);
}
```
##USAGE
  Use the built in angular $log provider.  The shadow logger will intercept all calls after the log and send them to the server.  
  $log.warn, $log.info, $log.error,$log.debug
  
## OPTIONS
  available options;
  ```
    var traceLevels = {
        error:1,
        warn:2,
        info:3,
        log:4,
        debug:5
  };
  var options = {
          traceLevel:5,   --maximum trace level to log to server  IE if you want to log errors and warnings only set this to 2;
          additionalData:{ --add whatever you need.  these will be appended to the data that will be sent to the server
            machineName:''
          },
          ajaxOptions:{  
            URL:'example/url',  --required
            type:'POST',
            contentType:'application/json'
            
          }
    };
    ```
	
 