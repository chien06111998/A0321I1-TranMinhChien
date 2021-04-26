function click_Yes() {
    alert("<3")
}
function click_No() {
    console.log("Ok");
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    console.log(x + " " + y);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}
