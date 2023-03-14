//nhap a,b,c
let a = parseInt(prompt("Nhap a"));
 let b = parseInt(prompt("Nhap b"));
 let c = parseInt(prompt("Nhap c"));
 //kiemtra
 if(a+b>c && b+c>a && a+c>b){
    if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
        document.write('Day la tam giac vuong');

    }else if(a==b && b==c){
        document.write('Day la tam giac can');
    }else{
        document.write('Day la tam giac thuong');
    }

 }else{
    document.write('Ba cạnh a,b,c không phai la ba canh cua mot tam giac!');

 }