function kiemTraNamNhuan() {
    var nam = parseInt(document.getElementById("nam").value);
    if(nam % 4 == 0 && nam % 100 !=0)
        document.getElementById("ket_qua").innerHTML = "Năm "+ nam + " Là năm nhuận.";
    else {
        if(nam % 100 == 0 && nam % 400 != 0)
            document.getElementById("ket_qua").innerHTML = "Năm" + nam + " không phải là năm nhuận.";
        else
            if(nam % 100 == 0 && nam % 400 == 0)
                document.getElementById("ket_qua").innerHTML = "Năm "+nam+ " là năm nhuận";
            else
                document.getElementById("ket_qua").innerHTML = "Năm "+nam+ " không phải là năm nhuận";
    }
}