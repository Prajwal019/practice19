// let amazon={
    
//         pname:"laptop",
//         brand: "Asus",
//         price:89975,

//         purpose: function s(data1,data2) {
//             console.log(`The product ${this.pname} of ${this.brand} brand is of ${this.price} ${data1} ${data2}`)
        
//     },
// }

// let flipkart ={
//     pname:"mobile",
//     brand: "Asus",
//     price:18997,

// }
// //call
// //amazon.purpose.call(flipkart,"with 0% emi charges"," and with 20% discount on credit card payments");
// //apply
// //amazon.purpose.apply(flipkart,["with 0% emi charges"," and with 20% discount on credit card payments"]);
// //bind
// let d=amazon.purpose.bind(flipkart,"with 0% emi charges"," and with 20% discount on credit card payments")
// d();
// console.log(d);


let general=
{
    brand: "brand",
    name: "name",
    color: "color",
    price: 250000,

    drive: function (data1,data2) {
        console.log(`The car ${this.name} of ${this.brand} company which is a ${data1} ${data2} of color ${this.color} and price is ${this.price} in USD `);
    }
}
let Lamborghini=
{
    brand: "Lamborghini",
    name: "Aventador",
    color: "Mettalic Blue",
    price: 850000,
}

let Ferrari=
{
    brand: "Ferrari",
    name: "Roma",
    color: "Mat black",
    price: 550000,
}

let Porsche=
{
    brand: "Porsche",
    name: "Cayman",
    color: "Mettalic Cyan",
    price: 580000,
}

let TATA=
{
    brand: "TATA",
    name: "Harrier",
    color: "Mettalic Cyan",
    price: 38000,
}
//call
general.drive.call(Lamborghini,"Super","Car");
//apply
general.drive.apply(TATA,["SUV","Car"]);