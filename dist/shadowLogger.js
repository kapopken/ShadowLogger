!function(){"use strict";function n(n){function o(n,o){return{error:function(e,r){n.error(e,r),o.error(e,r)},info:function(e){n.info(e),o.info(e)},warn:function(e){n.warn(e),o.warn(e)},debug:function(e){n.debug(e),o.debug(e)},log:function(e){n.log(e),o.info(e)}}}n.decorator("$log",o),o.$inject=["$delegate","shadowLogger"]}var o=angular.module("shadowLogger",[]);o.config(n),n.$inject=["$provide"]}(),function(){"use strict";function n(n,o){var e={MessageText:n,traceLevel:o};return e=$.extend(e,t.additionalData,!0)}function o(){return{setOptions:function(n){t=$.extend(t,n,!0)},$get:function(){return e()}}}function e(){function n(n,e){e>t.traceLevel||t.ajaxOptions.url&&o(n,e)}function o(n,o){var e={type:"POST",data:JSON.stringify(t.formatMessage(n,o)),contentType:"application/json"};e=$.extend(e,t.ajaxOptions,!0),$.ajax(e)}var e={error:1,warn:2,info:3,log:4,debug:5};return{error:function(o,r){n(o),n(r,e.error)},warn:function(o){n(o,e.warn)},info:function(o){n(o,e.info)},log:function(o){n(o,e.log)},debug:function(o){n(o,e.debug)}}}var r=angular.module("shadowLogger");r.provider("shadowLogger",o);var t={loggingUrl:"",traceLevel:5,formatMessage:n,additionalData:{machineName:""},ajaxOptions:{}}}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYWRvd0xvZ2dlci5tb2R1bGUuanMiLCJzaGFkb3dsb2dnZXIucHJvdmlkZXIuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiJHByb3ZpZGUiLCJsb2dEZWNvcmF0b3IiLCIkZGVsZWdhdGUiLCJzaGFkb3dMb2dnZXIiLCJlcnJvciIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJpbmZvIiwid2FybiIsImRlYnVnIiwibG9nIiwiZGVjb3JhdG9yIiwiJGluamVjdCIsImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJmb3JtYXRNZXNzYWdlIiwidHJhY2VMZXZlbCIsIm1lc3NhZ2VGb3JtYXQiLCJNZXNzYWdlVGV4dCIsIiQiLCJleHRlbmQiLCJvcHRpb25zIiwiYWRkaXRpb25hbERhdGEiLCJzaGFkb3dMb2dnZXJQcm92aWRlciIsInNldE9wdGlvbnMiLCJ1c2VyT3B0aW9ucyIsIiRnZXQiLCJhamF4T3B0aW9ucyIsInVybCIsImxvZ1RvU2VydmVyIiwidHlwZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJhamF4IiwidHJhY2VMZXZlbHMiLCJwcm92aWRlciIsImxvZ2dpbmdVcmwiLCJtYWNoaW5lTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsV0FDQSxZQUlBLFNBQUFBLEdBQUFDLEdBSUEsUUFBQUMsR0FBQUMsRUFBQUMsR0FDQSxPQUNBQyxNQUFBLFNBQUFDLEVBQUFDLEdBQ0FKLEVBQUFFLE1BQUFDLEVBQUFDLEdBQ0FILEVBQUFDLE1BQUFDLEVBQUFDLElBRUFDLEtBQUEsU0FBQUQsR0FDQUosRUFBQUssS0FBQUQsR0FDQUgsRUFBQUksS0FBQUQsSUFFQUUsS0FBQSxTQUFBRixHQUNBSixFQUFBTSxLQUFBRixHQUNBSCxFQUFBSyxLQUFBRixJQUVBRyxNQUFBLFNBQUFILEdBQ0FKLEVBQUFPLE1BQUFILEdBQ0FILEVBQUFNLE1BQUFILElBRUFJLElBQUEsU0FBQUosR0FDQUosRUFBQVEsSUFBQUosR0FDQUgsRUFBQUksS0FBQUQsS0F2QkFOLEVBQUFXLFVBQUEsT0FBQVYsR0FDQUEsRUFBQVcsU0FBQSxZQUFBLGdCQUxBLEdBQUFDLEdBQUFDLFFBQUFDLE9BQUEsa0JBQ0FGLEdBQUFkLE9BQUFBLEdBQ0FBLEVBQUFhLFNBQUEsZUNKQSxXQUNBLFlBYUEsU0FBQUksR0FBQVYsRUFBQVcsR0FDQSxHQUFBQyxJQUNBQyxZQUFBYixFQUNBVyxXQUFBQSxFQUdBLE9BREFDLEdBQUFFLEVBQUFDLE9BQUFILEVBQUFJLEVBQUFDLGdCQUFBLEdBR0EsUUFBQUMsS0FFQSxPQUNBQyxXQUFBLFNBQUFDLEdBQ0FKLEVBQUFGLEVBQUFDLE9BQUFDLEVBQUFJLEdBQUEsSUFFQUMsS0FBQSxXQUNBLE1BQUF4QixPQUlBLFFBQUFBLEtBNEJBLFFBQUFPLEdBQUFKLEVBQUFXLEdBQ0FBLEVBQUFLLEVBQUFMLFlBRUFLLEVBQUFNLFlBQUFDLEtBQ0FDLEVBQUF4QixFQUFBVyxHQUdBLFFBQUFhLEdBQUF4QixFQUFBVyxHQUNBLEdBQUFXLElBQ0FHLEtBQUEsT0FDQUMsS0FBQUMsS0FBQUMsVUFBQVosRUFBQU4sY0FBQVYsRUFBQVcsSUFDQWtCLFlBQUEsbUJBRUFQLEdBQUFSLEVBQUFDLE9BQUFPLEVBQUFOLEVBQUFNLGFBQUEsR0FDQVIsRUFBQWdCLEtBQUFSLEdBekNBLEdBQUFTLElBQ0FqQyxNQUFBLEVBQ0FJLEtBQUEsRUFDQUQsS0FBQSxFQUNBRyxJQUFBLEVBQ0FELE1BQUEsRUFHQSxRQUNBTCxNQUFBLFNBQUFDLEVBQUFDLEdBQ0FJLEVBQUFMLEdBQ0FLLEVBQUFKLEVBQUErQixFQUFBakMsUUFFQUksS0FBQSxTQUFBRixHQUNBSSxFQUFBSixFQUFBK0IsRUFBQTdCLE9BRUFELEtBQUEsU0FBQUQsR0FDQUksRUFBQUosRUFBQStCLEVBQUE5QixPQUVBRyxJQUFBLFNBQUFKLEdBQ0FJLEVBQUFKLEVBQUErQixFQUFBM0IsTUFFQUQsTUFBQSxTQUFBSCxHQUNBSSxFQUFBSixFQUFBK0IsRUFBQTVCLFNBdkRBLEdBQUFJLEdBQUFDLFFBQUFDLE9BQUEsZUFFQUYsR0FBQXlCLFNBQUEsZUFBQWQsRUFDQSxJQUFBRixJQUNBaUIsV0FBQSxHQUNBdEIsV0FBQSxFQUNBRCxjQUFBQSxFQUNBTyxnQkFDQWlCLFlBQUEsSUFFQVoiLCJmaWxlIjoic2hhZG93TG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGFkb3dMb2dnZXInLCBbXSk7XHJcbiAgICBhcHAuY29uZmlnKGNvbmZpZyk7XHJcbiAgICBjb25maWcuJGluamVjdCA9IFsnJHByb3ZpZGUnXTtcclxuXHRmdW5jdGlvbiBjb25maWcoJHByb3ZpZGUpe1xyXG5cdCAgICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRsb2cnLCBsb2dEZWNvcmF0b3IpO1xyXG5cdFx0bG9nRGVjb3JhdG9yLiRpbmplY3QgPSBbJyRkZWxlZ2F0ZScsJ3NoYWRvd0xvZ2dlciddO1xyXG4gICAgXHRcclxuXHRcdGZ1bmN0aW9uIGxvZ0RlY29yYXRvcigkZGVsZWdhdGUsc2hhZG93TG9nZ2VyKXtcclxuXHRcdFx0IHJldHVybiB7XHJcblx0XHRcdFx0IGVycm9yOmZ1bmN0aW9uKGV4Y2VwdGlvbixtZXNzYWdlKXtcclxuXHRcdFx0XHRcdCAkZGVsZWdhdGUuZXJyb3IoZXhjZXB0aW9uLG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0IHNoYWRvd0xvZ2dlci5lcnJvcihleGNlcHRpb24sbWVzc2FnZSk7XHJcblx0XHRcdFx0IH0sXHJcblx0XHRcdFx0IGluZm86ZnVuY3Rpb24obWVzc2FnZSl7XHJcblx0XHRcdFx0XHQgJGRlbGVnYXRlLmluZm8obWVzc2FnZSk7XHJcblx0XHRcdFx0XHQgc2hhZG93TG9nZ2VyLmluZm8obWVzc2FnZSk7XHJcblx0XHRcdFx0IH0sXHJcblx0XHRcdFx0IHdhcm46ZnVuY3Rpb24obWVzc2FnZSl7XHJcblx0XHRcdFx0XHQgICRkZWxlZ2F0ZS53YXJuKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0IHNoYWRvd0xvZ2dlci53YXJuKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdCB9LFxyXG5cdFx0XHRcdGRlYnVnOmZ1bmN0aW9uKG1lc3NhZ2Upe1xyXG5cdFx0XHRcdFx0ICAkZGVsZWdhdGUuZGVidWcobWVzc2FnZSk7XHJcblx0XHRcdFx0XHQgc2hhZG93TG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdCB9LFxyXG5cdFx0XHRcdCBsb2c6ZnVuY3Rpb24obWVzc2FnZSl7XHJcblx0XHRcdFx0XHQgICRkZWxlZ2F0ZS5sb2cobWVzc2FnZSk7XHJcblx0XHRcdFx0XHQgc2hhZG93TG9nZ2VyLmluZm8obWVzc2FnZSk7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0IH07XHJcblx0XHR9XHJcblx0fVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKXtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHQgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaGFkb3dMb2dnZXInKTtcclxuICBcclxuICAgIGFwcC5wcm92aWRlcihcInNoYWRvd0xvZ2dlclwiLHNoYWRvd0xvZ2dlclByb3ZpZGVyKTsgICAgICAgICAgICBcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgbG9nZ2luZ1VybDonJyxcclxuICAgICAgICAgIHRyYWNlTGV2ZWw6NSxcclxuICAgICAgICAgIGZvcm1hdE1lc3NhZ2U6Zm9ybWF0TWVzc2FnZSxcclxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOntcclxuICAgICAgICAgICAgbWFjaGluZU5hbWU6JydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhamF4T3B0aW9uczp7fVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2UobWVzc2FnZSx0cmFjZUxldmVsKXtcclxuICAgICAgdmFyIG1lc3NhZ2VGb3JtYXQgPSAge1xyXG4gICAgICAgIE1lc3NhZ2VUZXh0Om1lc3NhZ2UsXHJcbiAgICAgICAgdHJhY2VMZXZlbDp0cmFjZUxldmVsXHJcbiAgICAgIH07XHJcbiAgICAgIG1lc3NhZ2VGb3JtYXQgPSAkLmV4dGVuZChtZXNzYWdlRm9ybWF0LG9wdGlvbnMuYWRkaXRpb25hbERhdGEsdHJ1ZSk7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlRm9ybWF0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hhZG93TG9nZ2VyUHJvdmlkZXIoKSB7XHJcbiAgICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zLHVzZXJPcHRpb25zLHRydWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoYWRvd0xvZ2dlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICBmdW5jdGlvbiBzaGFkb3dMb2dnZXIoKXtcclxuICAgICB2YXIgdHJhY2VMZXZlbHMgPSB7XHJcbiAgICAgICAgZXJyb3I6MSxcclxuICAgICAgICB3YXJuOjIsXHJcbiAgICAgICAgaW5mbzozLFxyXG4gICAgICAgIGxvZzo0LFxyXG4gICAgICAgIGRlYnVnOjVcclxuICAgICB9O1xyXG4gICAgICBcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKGV4Y2VwdGlvbixtZXNzYWdlKXtcclxuICAgICAgICAgIGxvZyhleGNlcHRpb24pO1xyXG4gICAgICAgICAgbG9nKG1lc3NhZ2UsdHJhY2VMZXZlbHMuZXJyb3IpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FybjpmdW5jdGlvbihtZXNzYWdlKXtcclxuICAgICAgICAgIGxvZyhtZXNzYWdlLHRyYWNlTGV2ZWxzLndhcm4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5mbzpmdW5jdGlvbihtZXNzYWdlKXtcclxuICAgICAgICAgICAgbG9nKG1lc3NhZ2UsdHJhY2VMZXZlbHMuaW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2c6ZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICAgICAgICBsb2cobWVzc2FnZSx0cmFjZUxldmVscy5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVidWc6ZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICAgICAgICBsb2cobWVzc2FnZSx0cmFjZUxldmVscy5kZWJ1Zyk7IFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nKG1lc3NhZ2UsdHJhY2VMZXZlbCl7XHJcbiAgICAgIGlmKHRyYWNlTGV2ZWwgPiBvcHRpb25zLnRyYWNlTGV2ZWwpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBpZihvcHRpb25zLmFqYXhPcHRpb25zLnVybCl7XHJcbiAgICAgICAgbG9nVG9TZXJ2ZXIobWVzc2FnZSx0cmFjZUxldmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9nVG9TZXJ2ZXIobWVzc2FnZSx0cmFjZUxldmVsKXtcclxuICAgICAgdmFyIGFqYXhPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0eXBlOidQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTpKU09OLnN0cmluZ2lmeShvcHRpb25zLmZvcm1hdE1lc3NhZ2UobWVzc2FnZSx0cmFjZUxldmVsKSksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIGFqYXhPcHRpb25zID0gJC5leHRlbmQoYWpheE9wdGlvbnMsb3B0aW9ucy5hamF4T3B0aW9ucyx0cnVlKTtcclxuICAgICAgJC5hamF4KGFqYXhPcHRpb25zKTtcclxuICAgIH1cclxuICB9ICAgICAgICAgICAgICAgICAgICAgICBcclxufSkoKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==