****请使用IE浏览器****
题目：请编写timu.html中空缺的四个函数，实现在用户提交表单时屏蔽敏感词的功能。其中readFile函数通过ActiveX完成对本地敏感词库ciku.txt的读取，词库的格式为使用空格连接的多个敏感词。submitForm1函数为提交表单的主方法，在提交表单的时候调用filterWord函数对内容进行过滤并在文本域显示过滤后的内容。filterWord函数为过滤敏感词的主方法，通过多次调用filterOneWord函数过滤全部敏感词。filterOneWord函数为对每一敏感词的替换方法。
例：	1.在文本域中输入abcdefg，敏感词库为“a c g”，
	2.则点击提交留言是出现“你的留言中含有不恰当的词语,系统已自动为你修改,是否继续提交?”的提示.同时将文本域中的文本替换为“**b**def**”，
	3.用户点击确定则完成提交，点击取消则放弃提交。

请将ciku.txt放在C盘根目录。
能直接在浏览器文本域中查看替换后的效果 即“*b**def**”
最终请提交html文件，请以【名字.html】命名。

特别提醒：请一定要测试一下是否把g替换