 /*手机号验证*/
 var phonepreg = /^1[34578][0-9]{9}$/;
 if (!phonepreg.test(cellphone)) {
     return false;
 } else {
     myData.tel = cellphone;
 }
 
 /**
  * 年龄（1-120）验证：正则：/^(?:[1-9][0-9]?|1[01][0-9]|120)$/
  * 年龄（18-100）验证：正则：/^(1[8-9]|[2-9]\d|100)$/
  */
 var age = $.trim($('#age').val());
 var agepreg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
 if (age.length <= 0 || !agepreg.test(age)) {
     $('#errortip').html('请输入正确的年龄');
     return false;
 } else {
     myData.age = age;
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
function birthToAge(idcard){
    var myDate = new Date(); 
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - idcard.substring(6, 10) - 1;
    if (idcard.substring(10, 12) < month || idcard.substring(10, 12) == month && idcard.substring(12, 14) <= day) {
        age++;
    }
    return age;
}
module.exports=birthToAge;