/**
 * 判断一个单词是否为回文
 */
function checkPalindrom(str) {
    // split() 方法用于把一个字符串分割成字符串数组。
    // reverse() 方法用于颠倒数组中元素的顺序
    // join() 方法用于把数组中的所有元素放入一个字符串。
    return str == str.split('').reverse().join('');
}

/**
 * 去掉一组整型数组重复的值
 */
function unique(arr) {
    let hashTable = {};
    let data = [];
    for (let i = 0; i < arr.length; i++) {
        if (!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}
module.exports = unique;
unique("aaaaaavvsdds");
/**
 * 统计一个字符串出现最多的字母
 */
function findMaxDuplicateChar(str) {
    if (str.length == 1) {
        return str;
    }
    let charObj = {};
    for (let i = 0; i < str.length; i++) {
        // charAt() 方法可返回指定位置的字符
        if (!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }
    }
    let maxChar = '',
        maxValue = 1;
    for (var k in charObj) {
        if (charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;

}
module.exports = findMaxDuplicateChar;
/**
 * 排序算法<冒泡排序>
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tern = arr[j];
                arr[i] = arr[j];
                arr[j] = tern;
            }
        }
    }
    return arr;
}
module.exports = bubbleSort;

/**
 * 排序算法<快速排序>
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > q) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    // concat() 方法用于连接两个或多个数组。
    // 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}
module.exports = quickSort;

/**
 * 不借助临时变量，进行两个整数的交换
 */
function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

module.exports = swap;

/**
 * 找出正数组的最大差值
 */
function getMaxProfit(arr) {
    var min = arr[0];
    var max = 0; //最大差值
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        min = Math.min(min, current);
        var potentialProfit = current - min;
        max = Math.max(max, potentialProfit);
    }
    return max;
}

/**
 * 随机生成指定长度的字符串
 */
function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let tmp = '',
        i = 0,
        l = str.length;
    for (i = 0; i < n; i++) {
        // random()返回0到1之间的值
        // floor(x)返回一个小于x的最大整数
        tmp += str.charAt(Math.floor(Math.random() * l));
    }
    return tmp;
}
module.exports = randomString;

/**
 * 实现类似getElementsByClassName 的功能
 */
function queryClassName(node, name) {
    var starts = '(^|[ \n\r\t\f])',
        ends = '([ \n\r\t\f]|$)';
    var array = [],
        regex = new RegExp(starts + name + ends),
        els = node.getElementsByTagName('*'),
        length = els.length,
        i = 0,
        el;

    while (i < length) {
        el = els[i];
        if (regex.test(el.className)) {
            array.push(el);
        }
        i += 1;
    }

    return array;
}

/**
 * 
 */
