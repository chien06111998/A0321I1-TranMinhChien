function clickYes() {
    alert("<3")
}
function clickNo() {
    console.log("Ok");
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    console.log(x + " " + y);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}
