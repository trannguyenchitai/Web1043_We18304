let hoTen = prompt("Nhap ten: ");
let gioiTinh = prompt("Nhap gioi tinh: ");

const hoTen1 = hoTen.toUpperCase();

document.writeln("Ho va ten: "+hoTen1);
document.writeln("Gioi tinh: "+gioiTinh);
if(gioiTinh == Nam){
    document.write("Ten dem: Văn");
}else if(gioiTinh == Nu){
    document.write("Ten dem: Nữ");
}
