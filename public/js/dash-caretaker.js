function dologout()
{
    // window.history.back()
    var backlen = history.length;
    history.go(-backlen);
    window.location.replace("index.html");
}