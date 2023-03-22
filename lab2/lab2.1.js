let a = prompt("Nhập a: ");
let b = prompt("Nhập b: ");
let c = prompt("Nhập c: ");

if(a == 0){
    // bx + c = 0
}else{
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0){
        document.writeln("Phuong trinh vo nghiem");
    }else if (delta == 0){
        const x = -b / (2 * a);

        document.writeln("Phuong trinh co nghiem kep: x = "+x);
    }else{
        document.writeln("Phuong trinh co 2 nghiem phan biet");
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.writeln("Nghiem x1 = "+x1);
        document.writeln("Nghiem x2 = "+x2);
    }
}