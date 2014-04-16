console.log('initial checkbox.js');
window.onload=load;
function load() {
    // form get
    var do_scroll=0;
    var f=document.getElementById("f0");
    var v="";
//    $(this).data('tmp', "init");
//    var s=location.search.substr(1).split("&")
//    for(var i=0;i<f.length;i++){
//        if(f[i].type=="checkbox"){
//            f[i].onclick=function(){ this.form.submit();}
//            f[i].onkeypress=function(){ this.form.submit();}
//            for(var j in s){
//                if(s[j]==f[i].name+"="+f[i].value) f[i].checked=true;
//            }
//            if(f[i].checked) v+=(v==""?"":",")+f[i].value;
//        }
//    }

    console.log(v);
    console.log($(this).data('tmp'));

    if ($(this).data('tmp')==v){
        console.log('v == tmp_v');
    }else{
        console.log('v != tmp_v!!');
    }


    // scroll atma table
    if (do_scroll){
        var p = $(".scroll_atma").offset().top;
        $('html,body').animate({ scrollTop: p }, 1000);
    }
    do_scroll=0;
    $(this).data('tmp', v);
    console.log($(this).data('tmp'));

    //
    key = 'cookie_test'
    $.cookie(key, v);
    c = $.cookie(key);
    console.log("cookie:" + c);


    $.cookie('the_cookie', 'the_value');
    console.log($.cookie('the_cookie'));


//    $('.scroll_atma').keepPosition();

}