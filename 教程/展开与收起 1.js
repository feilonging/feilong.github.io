    function showadv() {//显示广告函数
        if(h<300){
            h+=5;
            adv.style.height=h+"px";
        }else{
            return;
        }
        setTimeout(showadv, 30);
    }
    showadv();//执行展开函数
    setTimeout(hideadv, 5000);//5秒后执行隐藏广告函数
    function hideadv() {//收起广告函数
        if(h>0){
            h-=5;
            adv.style.height=h+"px";
        }else{
            return;
        }
        setTimeout(hideadv, 30);
    }   