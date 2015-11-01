// (function(){
//   angular.module('shadowLogger').service('shadowLoggerService',shadowLogger);
// 
//   function shadowLogger(){
//     var vm = {
//       error:function(exception,message){
//         log(exception);
//       },
//  
//       info:function(message){
//           log(message);
//       },
//       debug:function(message){
//         log(message); 
//       },
//       warn:function(message){
//         log(message);
//       },
// 	     setOptions:function(userOptions){
//         options = userOptions;
// 	   }
//     }
//     return vm;
//     function log(message){
//       if(options.logAlert){
//         alert(message);
//       }
//       else if(console){
//         console.log(message);
//       }
//       else{
//           alert(message);
//       }
//     }
//     var options = {};
//   }
//  })();
