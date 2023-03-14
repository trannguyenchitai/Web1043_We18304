//nhap a,b,c
let a = parseInt(prompt("moi nhap a"));
 let b = parseInt(prompt("moi nhap b"));
 let c = parseInt(prompt("moi nhap c"));
 //kiemtra
 if(a+b>c && b+c>a && a+c>b){
    if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
        document.write('Đay la tam giac vuong');

    }else if(a==b && b==c){
        document.write('Đay la tam giac can');
    }else{
        document.write('Đay la tam giac thưong');
    }

 }else{
    document.write('ba cạnh a,b,c không phai la ba canh cua mot tam giac!');

 }