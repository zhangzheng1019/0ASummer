/**
 * 获取操作系统版本
 * @returns {String}
 */
function detectOS() {
      var OS = '';
      var OSArray = {};
      var sUserAgent = navigator.userAgent;
      var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
      var isMac = (navigator.platform == 'Mac68K') || (navigator.platform == 'MacPPC') ||
            (navigator.platform == 'Macintosh') || (navigator.platform == 'MacIntel');
      if (isWin) {
            OSArray.Win2000 = (sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf(
                  "Windows 2000") > -1);
            OSArray.WinXP = (sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") >
                  -1);
            OSArray.Win2003 = (sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf(
                  "Windows 2003") > -1);
            OSArray.WinVista = (sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf(
                  "Windows Vista") > -1);
            OSArray.Win7 = (sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -
                  1);
            OSArray.Win8 = (sUserAgent.indexOf("windows NT 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -
                  1);
            OSArray.Win10 = (sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") >
                  -1);
      }
      OSArray.Mac = isMac;
      OSArray.Unix = (navigator.platform == "X11") && !isWin && !isMac;
      OSArray.Linux = String(navigator.platform).indexOf("Linux") > -1;
      OSArray.iphone = sUserAgent.indexOf('iPhone') > -1;
      OSArray.ipod = sUserAgent.indexOf('iPod') > -1;
      OSArray.ipad = sUserAgent.indexOf('iPad') > -1;
      OSArray.Android = sUserAgent.indexOf('Android') > -1;
      console.log(OSArray);

      for (var i in OSArray) {
            if (OSArray[i]) {
                  OS = i;
            } 
      }
      return OS;
}

/**
 * 两个HTML元素做交换（在循环中）
 * @param  {[type]} items   [所有的条目]
 * @param  {[type]} current [点击要移动的]
 * @param  {[type]} k       [目标位置索引值:0-5]
 * @param  {[type]} movekey [移动元素的索引值:0-5]
 * @return {[type]}         [description]
 */
function switchItem(items,current,k,movekey){
    // 交换(坑)
    // 坑：交换时
    /* 
    使用这种会有延迟，存储有问题,,请使用下面未注释的
        var temp = $(items[movekey]).html();
        $(items[movekey]).html($(items[k]).html());
        $(items[k]).html(temp);
    */
    var btmp = $(items[k]).html();
    var temp = $(items[movekey]).html();
    $(items[movekey]).html(btmp);
    $(items[k]).html(temp);
}

// 坑：
// 苹果设备不支持"2017年9月3日"这种格式
// 转换为2017/09/03 这种格式
/**
 * [getSwitchDate 2017年9月3日->2017/09/03]
 * @param  {[string]} date [2017年9月3日]
 * @return {[type]}      [description]
 *  坑：
 *  苹果设备不支持"2017年9月3日"这种格式
 *  转换为2017/09/03 这种格式
 */
function getSwitchDate(date) {
    var date1 = date.replace(/年|月/g, "/");
    var date2 = Date.parse(date1.replace(/日/g, ""));
    date = new Date(date2);
    date = date.getTime();
    return date;
}

/**
 * [is_array 判断是否数组arr中是否存在val属性]
 * @param  {[type]}  arr [数组]
 * @param  {[type]}  val [查看的val属性值]
 * @return {Boolean}     [布尔值 true或false]
 */
function is_array(arr, val) {
    var arlen = arr.length; 
    var test = '';      
    for (var s = 0; s < arlen; s++) {
        test = arr[s].toString();
        if (test == val) {
            return true;
        }
    }
    return false;
}

/**
 * [removeArrVal 删除数组中的某一个val属性]
 * @param  {[type]} arr [数组]
 * @param  {[type]} val [要删除的属性值]
 * @return {[type]}     [删除之后存到arr中]
 */
function removeArrVal(arr, val) {
    var arlen = arr.length;             
    for(var i=0; i<arlen; i++) {
        if(arr[i] == val) {             
            arr.splice(i,1);                  
          break;
        }
    }
}

/**
 * [getClass 获取和遍历匹配特定CSS选择符的DOM元素]
 * @param  {[type]} selector [description]
 * @param  {[type]} context  [description]
 * @return {[type]}          [description]
 */
function getClass(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

/* 获取url地址中参数
 * 适用于：www.baidu.com/act?detail=30&uid=109
 * 使用: $.getUrlParam('uid'); //109
 */
(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
/* 获取url地址中参数 
 * 适用于：www.baidu.com/act/20?detail=30&uid=109
 * 使用: getUrlParam('act'); //20
 */
function getUrlParam(name) {
    var url = window.location.href;
    var r = url.substring(url.indexOf(name) + name.length + 1, url.indexOf('?'));
    if (r != null) return r;
    return null;
}
/*获取光标位置函数*/
function getCursortPosition(ctrl) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return (CaretPos);
}
/*设置光标位置函数*/
function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

/* 获取选中文字 */
function getSelectText() {
    var userSelection, text;
    if (window.getSelection) {
        // Firefox support
        userSelection = window.getSelection();
    } else if (document.selection) {
        // IE Support
        userSelection = document.selection.createRange();
    }
    if (!(text = userSelection.text)) {
        text = userSelection;
    }
    return text;
}
/*手机号验证*/
function isPhone(phone) {
    var phone = $.trim($('#' + phone).val());
    var phonepreg = /^1[34578][0-9]{9}$/;
    if (!phonepreg.test(cellphone)) {
        return false;
    } else {
        myData.tel = cellphone;
    }
}
/*邮箱验证*/
function isEmail(email) {
    var email = $.trim($('#' + email).val());
    var emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!emailreg.test(email)) {
        return false;
    } else {
        myData.email = email;
    }
}
/**
 * 年龄（1-120）验证：正则：/^(?:[1-9][0-9]?|1[01][0-9]|120)$/
 * 年龄（18-100）验证：正则：/^(1[8-9]|[2-9]\d|100)$/
 */
function isAge(age) {
    var age = $.trim($('#' + age).val());
    var agepreg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    if (age.length <= 0 || !agepreg.test(age)) {
        $('#errortip').html('请输入正确的年龄');
        return false;
    } else {
        myData.age = age;
    }
}

/*单选按钮验证*/
var is_study = $.trim($('input[name=is_study]:checked').val());
if (is_study.length <= 0) {
    $('#errortip').html('请选择是否有受过烹饪培训');
    return false;
} else {
    myData.is_study = is_study;
}

/*身份证号码验证*/
function isCard(idcard);
var idCard = card.value
var preg = /(^[1-9]\d{5}(19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;

if (!preg.test(idCard)) {
    $('#errortip').html('不合格' + idCard);
    return false;
} else {
    if (idCard.length == 18) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
            idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
        var idCardLast = idCard.substring(17); //得到最后一位身份证号码

        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
            if (idCardLast != "X" && idCardLast != "x") {
                $('#errortip').html('身份证号码错误！');
                return false;
            }
        } else {
            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
            if (idCardLast != idCardY[idCardMod]) {
                $('#errortip').html('身份证号码错误！');
                return false;
            }
        }
    }
    myData.idCard = idCard;
}
/**
 * [birthToAge 通过生日得到年龄]
 * @param  {[string]} idcard [身份证号码]
 * @return {[number]}        [年龄]
 */
function birthToAge(idcard) {
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - idcard.substring(6, 10) - 1;
    if (idcard.substring(10, 12) < month || idcard.substring(10, 12) == month && idcard.substring(12, 14) <= day) {
        age++;
    }
    return age;
}
module.exports = birthToAge;


/**
 * 验证 IPv4、IPv6 地址
 * @param {string} IP
 * @return {string}
 */
function validIPAddress(IP) {
    var ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    var ipv6 = /^(([\da-fA-F]{1,4}):){8}$/
    return ipv4.test(IP + ".") ? "IPv4" : ipv6.test(IP + ":") ? "IPv6" : "Neither";
};
module.exports = validIPAddress;



