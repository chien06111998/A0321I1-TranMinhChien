function tinh() {
    var kg = parseInt(document.getElementById("can_nang").value);
    var m = parseInt(document.getElementById("chieu_cao").value);
    cm = m * 100;
    bmi = (kg * 1000) / (cm*cm);
    if (bmi >0 && bmi<18.5)
        document.getElementById("hien_thi").innerText = "Underweight";
    else if (bmi <= 25)
        document.getElementById("hien_thi").innerText = "Normal";
    else if (bmi <30)
        document.getElementById("hien_thi").innerText = "Overweight";
    else
        document.getElementById("hien_thi").innerText = "Obese";
}