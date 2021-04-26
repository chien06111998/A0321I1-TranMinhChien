// function click_Mouse1() {
//     document.getElementById("pheptinh").value += "1";
// }
// function click_Mouse2() {
//     document.getElementById("pheptinh").value += "2";
// }
// function click_Mouse3() {
//     document.getElementById("pheptinh").value += "3";
// }
// function click_Mouse4() {
//     document.getElementById("pheptinh").value += " + ";
// }
// function click_Mouse5() {
//     document.getElementById("pheptinh").value += "4";
// }
// function click_Mouse6() {
//     document.getElementById("pheptinh").value += "5";
// }
// function click_Mouse7() {
//     document.getElementById("pheptinh").value += "6";
// }
// function click_Mouse8() {
//     document.getElementById("pheptinh").value += " - ";
// }
// function click_Mouse9() {
//     document.getElementById("pheptinh").value += "7";
// }
// function click_Mouse10() {
//     document.getElementById("pheptinh").value += "8";
// }
// function click_Mouse11() {
//     document.getElementById("pheptinh").value += "9";
// }
// function click_Mouse12() {
//     document.getElementById("pheptinh").value += " * ";
// }
// function click_Mouse13() {
//     document.getElementById("pheptinh").value += "0";
// }
// function click_Mouse14() {
//     document.getElementById("pheptinh").value += " / ";
// }
//Cách 2:
function clickMouse(value) {
    let gtri = document.getElementById("pheptinh").value;
    let kq="";
    if(value== "=") {
        console.log(gtri);
        kq = eval(gtri);
        document.getElementById("pheptinh").value = kq;
    }
    else {
        gtri += value;
        document.getElementById("pheptinh").value = gtri;
    }
}
function clickXoa() {
    document.getElementById("pheptinh").value = null;
    document.getElementById("show_pt").value = null;
}
// function tinh() {
//     //eval(): hàm tự động tính.
//     alert(eval(document.getElementById("pheptinh").value));
// }