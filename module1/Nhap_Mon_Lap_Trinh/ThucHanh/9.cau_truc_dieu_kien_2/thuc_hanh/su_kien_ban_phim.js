function nhanphimlen() {
    let  element = document.getElementById("ball");
    element.style.top = parseInt(element.style.top) - 5 + "px";
}
function nhanphimxuong() {
    var element = document.getElementById("ball");
    element.style.top = parseInt(element.style.left) + 5 + "px";
}
function nhanphimsangtrai() {
    var element= document.getElementById("ball");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function nhanphimsangphai() {
    var element = document.getElementById("ball");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function hamnhanphim(evt) {
    switch (evt.keyCode) {
        case 37:
            nhanphimsangtrai();
            break;
        case 39:
            nhanphimsangphai();
            break;
        case 38:
            nhanphimlen();
            break;
        case 40:
            nhanphimxuong();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', hamnhanphim);
}