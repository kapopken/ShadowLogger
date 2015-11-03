describe('shadowLogger',function(){
    var shadowLogger;
    var ajax ={url:"test/log"};
    beforeEach(module('kpShadowLogger'));
        
  
   
    describe('should log to server',function(){
        beforeEach(function(){
            module(function(_shadowLoggerProvider_){
            console.log('configure');
            _shadowLoggerProvider_.setOptions({ajaxOptions:ajax});
            }); 
        });
     beforeEach(inject(function(_shadowLogger_){
             shadowLogger = _shadowLogger_;
        }));
  
        it('warning to server', inject(function() {
            spyOn($, "ajax");
            shadowLogger.warn("warning");
            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax.url);
        }));
        it('info to server', inject(function() {
            spyOn($, "ajax");
            shadowLogger.info("info");
            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax.url);
        }));
        it('debug to server', inject(function() {
            spyOn($, "ajax");
            shadowLogger.debug("debug");
            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax.url);
        }));
            it('exception to server', inject(function() {
            spyOn($, "ajax");
            shadowLogger.error("exception","exception");
            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax.url);
        }));
    });
     describe('With TraceLevel set',function(){
           beforeEach(function(){
            module(function(_shadowLoggerProvider_){
            console.log('configure');
            _shadowLoggerProvider_.setOptions({ajaxOptions:ajax,traceLevel:2});
            }); 
        });
        beforeEach(inject(function(_shadowLogger_){
             shadowLogger = _shadowLogger_;
        }));
         it('should not log info to server', inject(function() {
            spyOn($, "ajax");
            shadowLogger.info("info");
            
            expect($.ajax).not.toBe();
        }));
            it('should log error  to server', inject(function() {
             spyOn($, "ajax");
            shadowLogger.error("exception","exception");
            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax.url);
        }));
     });
    
});