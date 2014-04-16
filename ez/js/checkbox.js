window.onload=load;
function load() {
    // form get
    var form_name = "form_atma";
    var checkbox_prefix = "checkbox";
    var f=document.getElementById(form_name);
    $(this).data('tmp', "init");
    key = 'cookie_test';
    var s=$.cookie(key);
    if (s==null){
        s=new Array();
    }else{
        s = s.split(",");
    }
//    console.log("s is : "+ s);
    for(var i=0;i<f.length;i++){
        if(f[i].type=="checkbox"){
            f[i].onclick=function(){
                save_checkbox_data_to_cookie();
            }
            f[i].onkeypress=function(){
                save_checkbox_data_to_cookie();
            }
            for(var k = 0, len = s.length; k < len; k++){
                if((checkbox_prefix + s[k]) == f[i].name){
                    f[i].checked=true;
//                    console.log("s[k] : " + s[k] + " : f[i] : " + f[i].name);
                }
            }
        }
    }

    function save_checkbox_data_to_cookie(){
        // フォームの内容をcookieに保存する
        var _v="";
        f=document.getElementById(form_name);
        for(var i=0;i<f.length;i++){
            if(f[i].checked){
                _v+=(_v==""?"":",")+(i+1);
            }
        }
//        console.log("_v is : " + _v);
        if(_v){
            key = 'cookie_test';
            $.cookie(key, _v);
//            console.log($.cookie(key));
        }
    }
}