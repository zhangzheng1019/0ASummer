/**
 * 原文：http://blog.csdn.net/jiangcs520/article/details/17564065
 * [touchEvents description]
 * @type {Object}
 */
var touchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",

    /**
     * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
     */
    initTouchEvents: function () {
        if (isPC()) {
            this.touchstart = "mousedown";
            this.touchmove = "mousemove";
            this.touchend = "mouseup";
        }
    }
};
touchEvents.initTouchEvents();

$(document).bind(touchEvents.touchstart, function (event) {
    event.preventDefault();
     
});
$(document).bind(touchEvents.touchmove, function (event) {
    event.preventDefault();
     
});
 
$(document).bind(touchEvents.touchend, function (event) {
    event.preventDefault();
     
});


/*判断设备是否为pc*/
function isPC() 
{ 
   var userAgentInfo = navigator.userAgent; 
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
   var flag = true; 
   for (var v = 0; v < Agents.length; v++) { 
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
   } 
   return flag; 
}   
