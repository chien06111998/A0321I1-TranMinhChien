let  imgObj = null;
imgObj = document.getElementById("myId");
function init() {
    imgObj = document.getElementById("myId");
    imgObj.style.position = 'relative'; //di chuyển item qua trái
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init(); // load sau cùng