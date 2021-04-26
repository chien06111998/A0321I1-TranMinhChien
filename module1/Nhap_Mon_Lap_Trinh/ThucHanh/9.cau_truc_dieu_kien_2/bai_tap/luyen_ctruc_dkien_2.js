function chuyenDoC() {
    let c = prompt("Nhập độ C: ");
    let F = c * 9 / 5 + 32;
    alert("Kết quả là: " + F);
}

function chuyenMet() {
    let m = prompt("Nhập mét:");
    let ft = m * 3.2808;
    alert("Kết quả là: " + ft);
}

function sHinhVuong() {
    let a = prompt("Nhập a: ");
    let s = a * a;
    alert("Diện tích hình vuông: " + s);
}

function sHinhCN() {
    let a = prompt(" Nhập a: ");
    let b = prompt(" Nhập b: ");
    let s = a * b;
    alert("Diện tích HCN: " + s);
}

function sTamGiacVuong() {
    let a = prompt("Nhập a: ");
    let b = prompt("Nhập b: ");
    let s = a * b / 2;
    alert("Diện tích tam giác vuông là: " + s);
}

function ptBac1() {
    let a = parseInt(prompt("Nhập a: "));
    let b = parseInt(prompt("Nhập b: "));
    let kq = -b / a;
    alert("Kết quả PT bậc 1: " + kq);
}

function ptBac2() {
    let a = parseInt(prompt("Nhập a: "));
    let b = parseInt(prompt("Nhập b: "));
    let c = parseInt(prompt("Nhập c: "));
    del = b * b - 4 * a * c;
    if (del < 0) {
        alert("PT vô nghiệm.");
    } else if (del == 0) {
        alert("PT có nghiệm kép: x= " + (-b / 2 * a));
    } else {
        x1 = (-b + Math.sqrt(del)) / (2 * a);
        x2 = (-b - Math.sqrt(del)) / (2 * a);
        alert("Pt có 2 nghiệm: x1= " + x1 + ", x2= " + x2);
    }
}

function ktTuoi() {
    var age = parseInt(prompt("Nhập tuổi"));
    if (age < 120 && age > 0) {
        alert("Tuổi là: " + age);
    } else
        alert("Nhập sai tuổi.");
}

function ktTamGiac() {
    var a = parseInt(prompt("Nhập a: "));
    var b = parseInt(prompt("Nhập b: "));
    var c = parseInt(prompt("Nhập c: "));
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        alert(a + ", " + b + ", " + c + " là ba cạnh của tam giác");
    } else
        alert(a + ", " + b + ", " + c + " không phải ba cạnh của tam giác");
}

function tinhGiaDien() {
    var a = prompt("Nhập số điện: ");
    if (a < 0)
        alert("Nhập sai.");
    else
        alert("Số tiền là: " + (a * 3000));
}

function thueTNCN() {
    var a = parseInt(prompt("Nhập tiền lương (triệu vnđ): "));
    if (a <= 5)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.05);
    else if (a <= 10)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.1);
    else if (a <= 18)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.15);
    else if (a <= 32)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.2);
    else if (a <= 52)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.25);
    else if (a <= 80)
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.3);
    else
        alert("Thuế TNCN của b là (triệu vnđ): " + a * 0.35);
}

function laisuatNH() {
    let i = 0;
    while (i < 0) {
        console.log("hi");
    }
    // var a = prompt("Nhập số tiền vay: ");
    // var b = prompt("Nhập số tháng vay: ");
    // var c = prompt("Nhập lãi suất hàng tháng (%): ");
    // if (a <= 0 && b <= 0 && c <= 0) {
    //     alert("Nhập sai: ");
    // }
    // else
    //     alert("Lãi suất hàng tháng của b là: " + (a * (c/100) / b));
}