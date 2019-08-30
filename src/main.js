//使用main.js导入包和静态资源，可以加快网页加载速度，减少二次请求

//导入jQuery
//import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'

$(function() {
    $('li:odd').css('backgroundColor', 'darkcyan')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})