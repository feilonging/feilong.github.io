
            function disable(){
                if(getStyle(document.getElementsByClassName("rank")[0]).pointerEvents == "none"){
                    document.getElementsByClassName("rank")[0].style.pointerEvents = "auto";
                }else {
                    document.getElementsByClassName("rank")[0].style.pointerEvents = "none";
                }
            }

            function get_hitokoto(){
                Ajax(
                    'get','https://v1.hitokoto.cn/',
                    { cat:"f",harset:"utf-8",encode:"json",source:"0"},
                    function(data)
					{
                        data = JSON.parse(data);
                        document.getElementById("hitokoto").innerHTML = data.hitokoto;
                        document.getElementById("from").innerHTML = data.from;
                        document.getElementById("creator").innerHTML = data.creator;
                        document.getElementById("created_at").innerHTML = data.created_at;
                        document.getElementById("type").innerHTML = data.type;
                        document.getElementById("id").innerHTML = data.id;
                        disable();
                    },
                    function(error){
                    }
                );
            }



            function Ajax(type, url, data, success, failed){
                // 创建ajax对象
                var xhr = null;
                if(window.XMLHttpRequest){
                    xhr = new XMLHttpRequest();
                } else {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP')
                }

                var type = type.toUpperCase();
                // 用于清除缓存
                var random = Math.random();

                if(typeof data == 'object'){
                    var str = '';
                    for(var key in data){
                        str += key+'='+data[key]+'&';
                    }
                    data = str.replace(/&$/, '');
                }

                if(type == 'GET'){
                    if(data){
                        xhr.open('GET', url + '?' + data, true);
                    } else {
                        xhr.open('GET', url + '?t=' + random, true);
                    }
                    xhr.send();

                }
				 else if(type == 'POST'){
                    xhr.open('POST', url, true);
                }

                // 处理返回数据
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            success(xhr.responseText);
                        } else {
                            if(failed){
                                failed(xhr.status);
                            }
                        }
                    }
                }
            }


            get_hitokoto();/*重要*/
            

