(function(){
  "use strict";
	 var app = angular.module('kpShadowLogger');
  
    app.provider("shadowLogger",shadowLoggerProvider);            
    var options = {
          loggingUrl:'',
          logAlert:false,
          traceLevel:5,
          additionalData:{
            machineName:''
          },
          ajaxOptions:{}
    };
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
    function formatMessage(message,traceLevel){
      var messageFormat =  {
        message:message,
        traceLevel:traceLevel
      };
      messageFormat = $.extend(messageFormat,options.additionalData,true);
      return messageFormat;
    }
    function log(message,traceLevel){
      if(traceLevel > options.traceLevel)
        return;
      if(options.logAlert){
        alert(message);
      }
      else if(console){
        console.log(message);
      }
      else{
          alert(message);
      }
      if(options.ajaxOptions.url){
        logToServer(message,traceLevel);
      }
    }
    function logToServer(message,traceLevel){
      var ajaxOptions = {type:'POST',
            url:JSON.stringify(formatMessage(message,traceLevel))
            ,contentType:'application/json'
        };
      ajaxOptions = $.extend(ajaxOptions,options.ajaxOptions,true);
      $.ajax(ajaxOptions);
    }
  }                       
})();

