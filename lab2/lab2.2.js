//nhap a,b,c
let a = parseInt(prompt("Nhap a"));
 let b = parseInt(prompt("Nhap b"));
 let c = parseInt(prompt("Nhap c"));
 //kiemtra
 if(a+b>c && b+c>a && a+c>b){
    if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
        document.write('Đây là tam giác vuông');

    }else if(a==b && b==c){
        document.write('Đây là tam giác cân');
    }else{
        document.write('Đây là tam giác thường');
    }

 }else{
    document.write('Ba cạnh a,b,c không phải la ba cạnh của một tam giác!');

 }