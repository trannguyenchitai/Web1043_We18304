 let arr = ["Tue", "Thu", "Sat", "Nine"];

 arr.splice(0, 0, "Mon");
 arr.splice(2, 0, "Wed");
 arr.splice(4, 0, "Fri");
 arr.splice(6, 1, "Sun");

 document.write('Xuat chuoi ngay trong tuan: ' + arr);