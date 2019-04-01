var url='http://39.107.64.93';

//提供三个参数：提示信息文字，样式，停留时间。
function tips(message, style, time)
{
    style = (style === undefined) ? 'tips-success' : style;
    time = (time === undefined) ? 1200 : time;
    $('<div>')
        .appendTo('body')
        .addClass('alert ' + style)
        .html(message)
        .fadeIn()
        .delay(time)
        .fadeOut();
};

// 成功提示框
function success_tips(message, time)
{
    tips(message, 'alert-success', time);
};
 
// 失败提示框
function fail_tips(message, time)
{
    tips(message, 'alert-danger', time);
};
 
// 提醒框
function warning_tips(message, time)
{
    tips(message, 'alert-warning', time);
};
 
// 信息提示框
 function info_tips(message, time)
{
    tips(message, 'alert-info', time);
};

// 淡入淡出效果
function f(x){
    $('#div1').text(x);
    $('#div1').fadeIn("slow",function(){
        $('#div1').fadeOut("slow")
    })
}

function check()
{
    if(document.getElementById("id").value == "")
    {
        f("用户名不能为空!");
        return false;
    }
    else if(document.getElementById("password").value == "")
    {
        f("密码不能为空!");
        return false;
    }
    else
    {
        var username = document.getElementById("id").value;
        var password = document.getElementById("password").value;
        var s1 = hex_md5("1");
        var s2 = hex_md5(s1.substring(s1.length-16));
        var salt = s2 + hex_md5(s2);
        var p1 = hex_md5(hex_md5(password) + salt);
        var x=new Date().getTime();
        var time = parseInt(x / 1000);
        var p2 = hex_md5(p1 + time);
        var path=url+"/login?username="+username+"&password="+p2+"&time="+time;
        //register?username=xx&password=p1
        $.get(path,
            function(data,status){
                var object = JSON.parse(data);
                if(object["result"] == "success")
                    f('登录成功！');
                else if(object["result"] == "failure")
                    f('登录失败！请重新核对您的用户名和密码');
                
            }
        );
    }
}