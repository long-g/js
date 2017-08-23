/**
 * Created by Administrator on 2017/8/23.
 */
/*
 伪代码:
 for (var i = 0; i < 头部元素.length; i++) {
 (function(i){
 批量给头部的元素绑定鼠标移入事件 = function() {
 让所有的div把class样式清空
 让对应的div把class设置为current

 让头部span的所有class设置为空
 头部span的最后一个元素的class设置为last
 给当前span元素的class追加" current"
 }
 })(i);
 }
 */
    var oUlis = document.getElementsByClassName('selectCardHd')[0].getElementsByTagName("li");
    var oOlis = document.getElementsByClassName('selectCardBd')[0].getElementsByTagName('li');
    for (var i= 0;i<oUlis.length;i++){
        (function (i) {
            oUlis[i].onmouseover = function(){
                for(var j = 0;j < oOlis.length;j++){
                    oOlis[j].className = '';
                }
                oOlis[i].className = ' current';
                for(var j = 0;j<oUlis.length;j++){
                    oUlis[j].className = '';
                }
                this.className = ' current';
            }
        })(i)
    }























