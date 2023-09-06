// var prodnum=285;
// switch (prodnum) {
//     case 195:
//         console.log("Lenevo laptops");
//         break;
//     case 266:
//         console.log("Asus laptops");
//         break;
//     case 285:
//         console.log("logitech keyboard");
//         break;
//     case 215:
//          console.log("Iphone 14");
//             break;
//     default:
//         console.log("SkullCandy headphones");
//         break;
// }

let productcode=310;
if (productcode>0&&productcode<=100) {
    console.log("laptops");
}
else if (productcode>=101&&productcode<=200) {
    console.log("Keyboards");
}
else if (productcode>=201&&productcode<=300) {
    console.log("CPU");
}
else if (productcode>=301&&productcode<=400) {
    console.log("Headset");
}
else
    console.log("Mouse");



