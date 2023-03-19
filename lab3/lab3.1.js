function tinhDiemTrungBinhSwitch() {
    let toan = parseFloat(prompt("Nhập điểm Toán: "));
    let ly = parseFloat(prompt("Nhập điểm Lý: "));
    let hoa = parseFloat(prompt("Nhập điểm Hóa: "));
    let sinh = parseFloat(prompt("Nhập điểm Sinh: "));
  
    if (
      toan < 0 ||
      toan > 10 ||
      isNaN(toan) ||
      ly < 0 ||
      ly > 10 ||
      isNaN(ly) ||
      hoa < 0 ||
      hoa > 10 ||
      isNaN(hoa) ||
      sinh < 0 ||
      sinh > 10 ||
      isNaN(sinh)
    ) {
      alert("Bạn đã nhập sai, vui lòng nhập lại");
      return;
    }
  
    let diemTB = (toan + ly + hoa + sinh) / 4;
  
    let xepLoai;
    switch (true) {
      case diemTB >= 9 && diemTB <= 10:
        xepLoai = "Giỏi";
        break;
      case diemTB >= 7 && diemTB < 9:
        xepLoai = "Khá";
        break;
      case diemTB >= 5 && diemTB < 7:
        xepLoai = "Trung bình";
        break;
      default:
        xepLoai = "Yếu";
        break;
    }
    alert("Điểm trung bình: " + diemTB.toFixed(2) + "\n Xếp loại: " + xepLoai);
  }


function tinhDiemTrungBinhIfElse() {
    let toan = parseFloat(prompt("Nhập điểm Toán: "));
    let ly = parseFloat(prompt("Nhập điểm Lý: "));
    let hoa = parseFloat(prompt("Nhập điểm Hóa: "));
    let sinh = parseFloat(prompt("Nhập điểm Sinh: "));
  
    if (
      toan < 0 ||
      toan > 10 ||
      isNaN(toan) ||
      ly < 0 ||
      ly > 10 ||
      isNaN(ly) ||
      hoa < 0 ||
      hoa > 10 ||
      isNaN(hoa) ||
      sinh < 0 ||
      sinh > 10 ||
      isNaN(sinh)
    ) {
      alert("Bạn đã nhập sai, vui lòng nhập lại");
      return;
    }
  
    let diemTB = (toan + ly + hoa + sinh) / 4;
  
    let xepLoai;
    if (diemTB >= 9 && diemTB <= 10) {
      xepLoai = "Giỏi";
    } else if (diemTB >= 7 && diemTB < 9) {
      xepLoai = "Khá";
    } else if (diemTB >= 5 && diemTB < 7) {
      xepLoai = "Trung bình";
    } else {
      xepLoai = "Yếu";
    }
  
    alert("Điểm trung bình: " + diemTB.toFixed(2) + "\n Xếp Loại: " + xepLoai);
  }
  
