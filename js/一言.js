    var i = 0;
    function GetQueryString(name){
        var reg = new RegExp("(^|[&?])"+ name +"=([^&]*)(&|$)");
        var r = (document.getElementsByName("code")[0].value).substr(1).match(reg);
        if(r!=null){
            return  unescape(r[2]);
        }else{
            return null;
        }
    }
    function get(){
        var cat = GetQueryString('cat');
        var charset = GetQueryString('charset');
        var length = GetQueryString('length');
        var encode = GetQueryString('encode');
        var fun = GetQueryString('fun');
        var source = GetQueryString('source');
        if (i == 1)
		{console.log(
		"请求：https://api.imjad.cn/hitokoto/\n"+ 
		"参数：cat=" + cat + 
		" charset=" + charset + 
		" length=" + length + 
		" encode=" + encode + 
		" fun=" + fun + 
		" source=" + source + 
		"\n" + 
		"返回：" + document.getElementById('hitokoto').contentWindow.document.getElementsByTagName('pre')[0].innerHTML);
        }
		else
		{
         i = 1;
        }
    }
