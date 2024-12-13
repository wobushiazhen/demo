/*
* 做飞翔的小鸟游戏，需要保证5张图全局加载完毕之后，进行游戏画面的绘制
*
* */

/*
* function{loadTmage}专业加载图像30年
* param{imgUrl:Object}按照key、val的形式存储所有要加载的图像地址
* param{fn:Function}当所有图像加载完毕之后，就会被调用，同时会把所有的图像资源传递过去
* */
function loadImage(imgUrl,fn) {
    /*
    * 思路：
    * 1.遍历imgUrl，动态创建img对象，然后指定其src为遍历到地址，以加载这些图片资源
    * 2.在加载图片的过程中，需要监听每一张img的onload事件，当所有的图片都触发onload事件时，调用回调，把加载完毕的资源传递过去
    * */  
    //存储图像资源
    var imgObj = {};

    var tempImg;

    //记录已经加载完毕的图像数量
    var loaded = 0;

    //统计要加载的图像数量
    var imgLength = 0;

    //遍历所有的url，动态创建img
    for(var key in imgUrl){

        imgLength++;//遍历进去的长度，就是传入的数据个数

        tempImg = new Image();

        //给所有图像监听load事件
        tempImg.onload = function () {
            loaded++;
            //当图片加载的数量大于要加载的数量,那么就可以执行回调了
            if(loaded >= imgLength){
                //回调还可以接受一个参数，就是给你的参数imgUrl存放的地址imgObj
                fn(imgObj);
            }
        };

        tempImg.src = imgUrl[key];

        //把当前加载的图像存储起来
        imgObj[key] = tempImg;
    }

}