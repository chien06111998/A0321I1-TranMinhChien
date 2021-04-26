function bai1() {
    var a = prompt("Nhap a: ", ' ');
    var b = prompt("Nhap b: ", ' ');
    if(a % b == 0)
        alert(a + " chi het cho " +b);
    esle
        alert(a + " khong chia het cho " +b);
}
function bai2() {
    var tuoi = prompt("Nhap tuoi: ", ' ');
    if (tuoi >= 14)
        alert("Đủ tuổi học lớp 10.");
    else
        alert("Không đủ tuổi học lớp 10.");
}
function bai3() {
    var so_a = parseInt(prompt("Nhập số: ", ' '));
    if (so_a>0)
        alert(so_aa + " lon hon 0.")
    else if (so_a < 0)
        alert(so_a+ " bằng 0.");
    else
        alert(so_a + " nho hơn 0.");
}
function bai4() {
    var a = prompt("Nhap a", ' ');
    var b = prompt("Nhap b", ' ');
    var c = prompt("Nhap c", ' ');
    if (a>b && a>c)
        alert(a+ " lon nhat");
    else { if(b>c)
        alert(b + " lớn nhất");
    else
        alert(c + " lớn nhất");
    }
}
function bai5() {
    var diemkt = prompt("Nhap điểm kiem tra: ");
    var diemgk = prompt("Nhập điểm giữa kỳ: ");
    var diemck = prompt("Nhập điểm cuối kỳ: ");
    dtb = 0.1 * diemkt + 0.35 * diemgk + 0.55 * diemck;
    if(dtb >= 8)
        alert("Học sinh giỏi");
    else if(dtb >= 6.5)
        alert("Học sinh khá");
    else if(dtb>4)
        alert("Học sinh trung bình");
    else if (dtb>2)
        alert("Học sinh yếu");
    else
        alert("Học sinh kém");
}
function bai6() {
    var tienbanhang = parseInt(prompt("Nhập tiền bán hàng: "));
    var tientip = parseInt(prompt("Nhập tiền típ: "));
    var tienshiphang = parseInt(prompt("Nhập tiền ship: "));
    hoahong = (tienbanhang + tienshiphang + tientip) * 0.1;
    alert("Tiền hoa hồng nhận được: " + hoahong);
}
function bai7() {
    var nhapthoigiangoi = parseInt( prompt("Nhập thời gian gọi (giây): "));
    alert("Cước phí là (100đ/phút): "+nhapthoigiangoi*100/60);
}