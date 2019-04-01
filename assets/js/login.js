
function set_cookie(cookies){
    document.cookie = "cookie=" + cookies;
}

function delcookie() {
    let day = new Date();
    day.setDate(day.getDate()-100);
    document.cookie = "cookie=a;" + "expire=" +day;
}

function check_cookie() {
    let exist = document.cookie.indexOf("cookie=");
    return !(exist===-1);
}

function login() {
    if(check_cookie()){
        alert("welcome");
    }else {
        set_cookie("login");
        alert("first");
    }
}