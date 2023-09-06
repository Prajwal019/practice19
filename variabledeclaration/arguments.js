

// passing an additional actual arguments

// function bikes(name,color,cc) {
//     console.log(name);
//     console.log(color);
//     console.log(cc);
//     console.log(arguments[3]);
//     console.log(arguments[4]);
// }
// bikes("hellcat","black",1350,800000,"hi");


//default parameter

function laptops(brand,name,type="gaming",price) {
    console.log(brand);
    console.log(name);
    console.log(type);
    console.log(price);
    console.log(arguments);
}
//laptops("Asus","Tuff F17",this.type,"89450");
laptops("Asus","Tuff F17",undefined,"89450","hello");