
function hidedown() {
	document.getElementById("downdiv").style.display = "none";
}


function myFunction() {
    document.getElementById("demo").innerHTML = "欢迎来到我的主页!";
}














window.onload = function () {
                var body = document.body;
                var div = document.createElement("div");
                div.id = "downdiv";
                div.innerHTML = '<div class="downcode" style="position:fixed;z-index:1000;top:200px;right:10px;overflow:hidden;background: #fff;"><p style="text-align:right;color:#b50723;margin: 3px;cursor: pointer;"><span onclick="hidedown();">关闭</span></p><img alt= "下载" src= "https://www.qu.la/images/downcode.png" style= "width:200px;height:200px;" /><p style="text-align:center;line-height:24px;">给点钱</p></div >';
                body.appendChild(div);
            }            
