// var gtri_a = parseInt(document.getElementById("gtri1").value);
// var gtri_b = parseInt(document.getElementById("gtri2").value);

// function cong() {
//     var gtri_a = parseInt(document.getElementById("gtri1").value);
//     var gtri_b = parseInt(document.getElementById("gtri2").value);
//     // console.log("Giá trị phép cộng là: " + (gtri_a+gtri_b));
//     document.getElementById("ketqua").innerHTML = "Tong: "+gtri_a+" + "+gtri_b+ " la: " +(gtri_a+gtri_b);
// }
// function tru() {
//     var gtri_a = parseInt(document.getElementById("gtri1").value);
//     var gtri_b = parseInt(document.getElementById("gtri2").value);
//     // document.write("Giá trị phép trừ là: " + (gtri_a-gtri_b));
//     document.getElementById("ketqua").innerText = "Hiệu: "+gtri_a+ " - " +gtri_b+ " là: " +(gtri_a-gtri_b);
// }
// function nhan() {
//     var gtri_a = parseInt(document.getElementById("gtri1").value);
//     var gtri_b = parseInt(document.getElementById("gtri2").value);
//     // document.write("Giá trị phép nhân là: " + (gtri_a*gtri_b));
//     document.getElementById("ketqua").innerHTML = "Tích: "+gtri_a+ " * "+gtri_b+" là: " +(gtri_a*gtri_b);
// }
// function chia() {
//     var gtri_a = parseInt(document.getElementById("gtri1").value);
//     var gtri_b = parseInt(document.getElementById("gtri2").value);
//     // document.write("Giá trị phép chia là: " + (gtri_a/gtri_b));
//     document.getElementById("ketqua").innerHTML = "Thương: "+gtri_a+ " / "+gtri_b+ " là: " +(gtri_a/gtri_b);
// }

function ketqua() {
    var a = parseInt(document.getElementById("soa").value);
    var b = parseInt(document.getElementById("sob").value);
    var phep_tinh = document.getElementById("phep_tinh").value;
    if(phep_tinh == "cong") {
        console.log(phep_tinh);
        document.getElementById("ket_qua").innerHTML = "Kết quả: " + (a+b);
    }
    else {
        if(phep_tinh == "tru") {
            console.log(phep_tinh);
            document.getElementById("ket_qua").innerHTML = "Kết quả: " + (a-b);
        }
        else {
            if(phep_tinh == "nhan") {
                console.log(phep_tinh);
                document.getElementById("ket_qua").innerHTML = "Kết quả: " + (a*b);
            }
            else {
                if(phep_tinh == "chia") {
                    console.log(phep_tinh);
                    document.getElementById("ket_qua").innerHTML = "Kết quả: " + (a/b);
                }
            }
        }
    }
}