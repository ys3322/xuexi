
<!--index.html 轮播图JS代码-->
/*找到组件 banner*/
var banner = document.getElementById("banner");
/*初始化默认位置为 1*/
var num = 1;
//为页面设置自动换图 设置循环事件
setInterval(function () {
    /*循环一次 +1*/
    num++;
    /*如果是12，那么设置为默认值*/
    if (num === 12) {
        num = 1;
    }
    /*循环时，获取到banner的src属性，进行更改属性值*/
    banner.src = "./img/" + "banner" + num + ".png";
    /*设置循环间隔*/
}, 3500);

var rowLeft = document.getElementById("row-left");
var rowRight = document.getElementById("row-right");
//点击左箭头 回退
rowLeft.onclick = function () {
    num--;
    if (num === 0) {
        num = 11;
    }
    banner.src = "./img/" + "banner" + num + ".png";
};
//点击右箭头  前进
rowRight.onclick = function () {
    num++;
    if (num === 12) {
        num = 1;
    }
    banner.src = "./img/" + "banner" + num + ".png";
};



alert("本网站仅学习使用，更多内容请移步官网！");
