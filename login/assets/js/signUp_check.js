var url='http://39.107.64.93';

// 淡入淡出效果
function f(x){
    $('#div1').text(x);
    $('#div1').fadeIn("slow",function(){
        $('#div1').fadeOut("slow")
    })
}

function signUp_check()
{
    if(document.getElementById("id").value == "")
    {
        f("请输入想要注册的用户名!");
        return false;
    }
    else if(document.getElementById("password1").value == "")
    {
        f("请输入您的密码!");
        return false;
    }
    else if(document.getElementById("password2").value == "")
    {
        f("请确认您的密码");
        return false;
    }
    else if(document.getElementById("password1").value != document.getElementById("password2").value)
    {
        f("两次输入的密码需一致");
        return false;
    }
    else
    {
        var username = document.getElementById("id").value;
        var password = document.getElementById("password1").value;
        var s1 = hex_md5("1");
        var s2 = hex_md5(s1.substring(s1.length-16));
        var salt = s2 + hex_md5(s2);
        var p1 = hex_md5(hex_md5(password) + salt);
   //     var x=new Date().getTime();
   //     var time = parseInt(x / 1000);
   //     var p2 = hex_md5(p1 + time);
        var path=url+"/register?username="+username+"&password="+p1;
        //register?username=xx&password=p1
        $.get(path,
            function(data,status){
                var object = JSON.parse(data);
                if(object["result"] == "success")
                    f('注册成功!');
                else if(object["result"] == "failure")
                    f('注册失败');
                
            }
        );
        return true;
    }
}