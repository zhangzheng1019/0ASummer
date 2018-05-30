<?php
const FILE_PATH = 'ciku.txt';
/**
 * 取得敏感词数组
 * @param $filePath
 * @return array
 */
function readCiKuFile($filePath) {
    $wordsArr = array();
    $file_path = $filePath;
    if(file_exists($file_path)){
        $str = file_get_contents($file_path);//将整个文件内容读入到一个字符串中
        $wordsArr =  explode('|',$str);
    } else {
        return $wordsArr;
    }
    return $wordsArr;
}
/**
 * 取出$str中的所有邮件
 * @param $str
 * @return mixed
 */
function getEmailByStr($str) {
    $preg = "/([a-z0-9\-_\.]+@[a-z0-9]+\.[a-z0-9\-_\.]+)+/i";
    if (preg_match_all($preg, $str , $matches)) {
        return $matches;
    }
}

if (!isset($_POST['message'])) {
    return '参数有误';
}
$wordsArr = readCiKuFile(FILE_PATH);
$cnt = $_POST['message'];
$word = array_combine($wordsArr,array_fill(0,count($wordsArr),'*'));
$result = strtr($cnt, $word);
echo $result;

?>