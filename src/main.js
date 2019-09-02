//使用main.js导入包和静态资源，可以加快网页加载速度，减少二次请求

//导入jQuery
//import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'
//webpack默认只能打包处理JS类型的文件，如果要处理其他非JS类型的文件，需要安装其他loader

import './css/index.css'

import './css/index.less'

$(function() {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})