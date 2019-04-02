let Bar = true;
let num = 0;

$("#sendMessage").click(function () {
    let a = document.getElementById("send_barrage");
    let ran = Math.floor(Math.random() * 90 + 10);
    ran = toPercent(ran);
    num = ++num%200;
    let consumer = "consumer" + num.toFixed();
    let text = "<h4 class='consumer' id='"+consumer + "' "
        + "style='position:absolute;right:0;" + "'" + ">" + a.value + "</h4>";
    $("#barrage").append(text);
    let bar = $("#"+consumer);
    bar.css("top",ran);
    bar.animate({right:'100%'}, 12000);
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    third.innerHTML = second.innerHTML;
    second.innerHTML = first.innerHTML;
    first.innerHTML = consumer + ":" + a.value;
    a.value = "";
    setTimeout(function(){$("p").remove("#consumer");},10000);
});

$("#send_barrage").keydown(function() {
    if (event.keyCode === 13) { //keyCode=13是回车键
        $("#sendMessage").click();
    }
});
function CrlBarrage() {
    if(Bar){
        $("#barrage").hide();
        document.getElementById("crl_barrage").innerHTML = "开启弹幕";
    }else {
        $("#barrage").show();
        document.getElementById("crl_barrage").innerHTML = "关闭弹幕";
    }
    Bar = !Bar;
}
function toPercent(point){
    if (point==0) {
        return 0;
    }
    var str=Number(point).toFixed();
    str+="%";
    return str;
}