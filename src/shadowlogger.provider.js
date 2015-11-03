(function(){
  "use strict";
	 var app = angular.module('shadowLogger');
  
    app.provider("shadowLogger",shadowLoggerProvider);            
    var options = {
          logAlert:false,
          traceLevel:5,
          additionalData:{
            machineName:''
          },
          ajaxOptions:{}
    },
    ajaxOptions = {
          type:'POST'
          ,contentType:'application/json'
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
      var formatMessage =  {
        message:message,
        traceLevel:traceLevel
      } 
      formatMessage = $.extend(formatMessage,options.additionalData,true);
      return formatMessage;
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
        
      }
    }
    function logToServer(message,traceLevel){
      ajaxOptions.data = formatMessage(message,traceLevel);
      ajaxOptions = $.extend(ajaxOptions,options.ajaxOptions,true);
      $.ajax(ajaxOptions);
    }
  }                       
})();

