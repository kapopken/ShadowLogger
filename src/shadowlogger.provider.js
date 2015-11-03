(function(){
  "use strict";
	 var app = angular.module('shadowLogger');
  
    app.provider("shadowLogger",shadowLoggerProvider);            
    var options = {
          loggingUrl:'',
          traceLevel:5,
          formatMessage:formatMessage,
          additionalData:{
            machineName:''
          },
          ajaxOptions:{}
    };
    function formatMessage(message,traceLevel){
      var messageFormat =  {
        MessageText:message,
        traceLevel:traceLevel
      };
      messageFormat = $.extend(messageFormat,options.additionalData,true);
      return messageFormat;
    }
    function shadowLoggerProvider() {
       
      return {
          setOptions: function(userOptions) {
                  options = $.extend(options,userOptions,true);
          },
          $get: function () {
                  return shadowLogger();
          }
      };
    }
   function shadowLogger(){
     var traceLevels = {
        error:1,
        warn:2,
        info:3,
        log:4,
        debug:5
     };
      
     return {
        error:function(exception,message){
          log(exception);
          log(message,traceLevels.error);
        },
        warn:function(message){
          log(message,traceLevels.warn);
        },
        info:function(message){
            log(message,traceLevels.info);
        },
        log:function(message){
          log(message,traceLevels.log);
        },
        debug:function(message){
          log(message,traceLevels.debug); 
        }
    };

    function log(message,traceLevel){
      if(traceLevel > options.traceLevel)
        return;
      if(options.ajaxOptions.url){
        logToServer(message,traceLevel);
      }
    }
    function logToServer(message,traceLevel){
      var ajaxOptions = {
            type:'POST'
            ,data:JSON.stringify(options.formatMessage(message,traceLevel))
            ,contentType:'application/json'
        };
      ajaxOptions = $.extend(ajaxOptions,options.ajaxOptions,true);
      $.ajax(ajaxOptions);
    }
  }                       
})();

