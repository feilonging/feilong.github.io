UA = navigator.userAgent.toLowerCase();
url = window.location;
url = url.toString();
if((UA.indexOf('iphone') != -1 || UA.indexOf('mobile') != -1 || UA.indexOf('android') != -1 || UA.indexOf('windows ce') != -1 || UA.indexOf('ipod') != -1) && UA.indexOf('ipod') == -1) {
if (url.match(/^http:\/\/125.40.214.8\:1000\/$/) || url.match(/^http:\/\/125.40.214.8\:1000$/)) { Go('http:\/\/125.40.214.8\:1000'); }
if (url.match(/主站/)) {Go('/index.html');}
if (url.match(/书库/)) {Go('http://125.40.214.8:2000');}
if (url.match(/经典英文哲理句子/)) {Go('/经典英文哲理句子/index.html');}
if (url.match(/资源/)) {Go('/资源/index.html');}
if (url.match(/ppt集合/)) {Go('/ppt集合.html');}
if (url.match(/动漫中100条句子/)) {Go('/动漫中100条句子/index.html');}
if (url.match(/资源/)) {Go('/资源集合/index.html');}
if (url.match(/帮助/)) {Go('/帮助/index.html');}
if (url.match(/反馈/)) {Go('/反馈/index.html');}
if (url.match(/wanbenxiaoshuo/)){Go('https://m.qu.la/wapfull/1.html');}
if (url.match(/\/txt\/\d+?\//)){id = url.match(/\/txt\/(\d+?)\//);Go('https://m.qu.la/txt/'+id[1]+'/');}
if (url.match(/\/book\/\d+?\//)){id = url.match(/\/book\/(\d+?)\//);Go('https://m.qu.la/book/'+id[1]+'/');}
if (url.match(/\/book\/\d+?\/\d+?\.html/)){id = url.match(/\/book\/(\d+?\/\d+?)\.html/);Go('https://m.qu.la/book/'+id[1]+'.html');}
}
function Go(url) { window.location = url;}







//125.40.214.8:1000/