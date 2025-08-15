// // const rang=prompt("Rang kiriting:".toLocaleLowerCase());
// // if(rang=="qizil"){
// //     alert("Toxta");
// // }
// // else if(rang>="yashil"){
// //     alert("Yur");
// // }
// // else if(rang>="sariq"){
// //     alert("Tayorlan");
// // }
// // else{
// //     alert("Bunaqa rang yoq")
// // }
// let ismlar=["Amirxon","Ubaydulloh","Qudratilla","Mavlonbek","Moxir","Shoxruz"];
// // console.log(ismlar.length);
// // ismlar[5]="Ijodchi";
let mevalar=["Anor","Uzum","Nok","Shaftoli","Banan","olma"];
console.log(mevalar);
alert("Boshlanishidagi Array uzunligi:"+mevalar.length);
let javob=confirm("Bitta mevani o'chirmoqcimiz?");
if(javob==true){
    mevalar.pop();
}
alert("Array uzunligi: " +mevalar.length);
console.log(mevalar);