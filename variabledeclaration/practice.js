// // var a;
// // //console.log(a);
// // a=100;
// // console.log(a);

// let a;
// //console.log(a);

// a=100;
// //console.log(a);
// a=200;
// console.log(a);

// let a;
// a=10;
// a=20;
// console.log(a);

// let a=20;
// a=30;
// console.log(a);

// const a=10;
// a=20;
// console.log(a);

// let a=20;
// a=30;
// // console.log(a);
// a="jd";
// console.log(a);

// console.log(x);
// var x=30;

// console.log(x);
// let x=20;

// console.log(x);
// const x=20;

// function a(){
   
//     {
//         var x=20;
//         x=30;
//     }
// }
//   console.log(x); 
   

// a();

// function b(){
    
//     {
//         let x=30;
//         x=20;
//     }
//     console.log(x);
// }
// b();

// function c(){
    
//     {
//         //a=20;
//         const a=10;
        
//     }
//     console.log(a);
// }
// c();

// var g=20;
// console.log(typeof(g));
// const k="Hi";
// console.log(k);
// console.log(typeof(Number(k)));
// console.log(k);
// console.log(typeof(k));

// loops
// Boolean=false;
// if (Boolean==false) {
//     console.log("Hello");
// // }
// var arr=[10,20,30,40,50];
// // for (var k in arr) {
// //     console.log(k);
        
// //     }

// for (var i of arr) {
//     console.log(i);
// }


// a();
// function a(){
//     console.log("Hi there....!");
// }


// var h=a();
// function a() {
//     console.log("Hello");
// }

// let h=a();
// function a() {
//     console.log("Hello dude");
// }


// const h=a();
// function a() {
//     console.log("Lol....");
// }


// a();
// let a=function() {
//     console.log("hi");
// }

// a();
// var a=function(){
//     console.log("No.........!");
// }


//block inside a function

// var x=2;
// let y=3;
// const z=4;

// function add() {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     {
//         var a1=40;
//         let b1=50;
//         const c1=60;

//         console.log(x);
//         console.log(y);
//         console.log(z);
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a1);
//     //console.log(b1);
//    // console.log(c1);
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// add();
// console.log(x);
// console.log(y);
// console.log(z);

// a function inside a block

// var x=2;
// let y=3;
// const z=4;
// {
//     var a=10;
//     let b=20;
//     const c=30;

//     function add() {
//         var a1=40;
//         let b1=50;
//         const c1=60;

//         console.log(x);
//         console.log(y);
//         console.log(z);
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     add();
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// add();
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
//console.log(b);
//console.log(c);

// var a=10;
// let b=20;
// const c=30;
// {
//     var d=40;
//     let e=50;
//     const f=60;
//     function add() {
//         var g=70;
//         let h=80;
//         const i=90;
//     }
// }
// {
//     var j='a';
//     let k='b';
//     const l='c';
//     add();
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(j);

// closure property

// function add(){
//     var a=10;
//     let b=20;
//     const c=30;
//      return function sub() {
//         var d=45;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     return function div() {
//         console.log(a);
//     }
// }
// let a=add();
// a()();


//closure
// function add() {
//     var z=10;
//     return function sub() {
//         console.log(z);
//     }
// }
// let v=add();
// v();

// function add() {
//     console.log("Good");
// }
// add();

// let a=function () {
//     console.log("Hello");
// }
// a();

// (function add(a,b) {
//     var sum=a+b;
//     console.log(sum);
// })
// (4,1);

//arrow
// let a=(a,b)=>(a*b)
//     console.log(a(2,3));


//standard method

// let bikes=
// {
//     brand:"Ducati",
//     cc:1250,
//     price: 650000,

//     color:function (name) {
//         return name;
//     },
//     size:{
//         length:12,
//         width:4

//     }
// }
// console.log(bikes.brand);
// console.log(bikes.color("Honda"));
// console.log(bikes.size.length);


// function

// function cars(brand,name,cc,price){
//     this.brand=brand;
//     this.name=name;
//     this.cc=cc;
//     this.price=price;
// }
// let s=new cars("mercedes","CLK",4250,56000);
// console.log(s.brand);

// class

// class pen{
//     constructor(brand,color,price){
//         this.brand=brand;
//         this.color=color;
//         this.price=price;
//     }
// }
// let p=new pen("reynolds","Green",20);
// console.log(p.brand);



//new 

// let fan=new Object();

// fan.brand="Orient";
// fan.color="Golden";
// fan.wings=3;

// console.log(fan.brand);

//standard

// let bag=
// {
//     brand:"wildcraft",
//     capacity:45,
//     color:function (val) {
//         return val;
//     },
//   handling:  {
//         purpose:"trekking",
//         ways: "double" 
//     }

// }

// function

// function choco(brand,name,price) {
//     this.brand=brand;
//     this.name=name;
//     this.price=price;

// }
// let f=new choco("nestle","munch",10);
// console.log(f.brand);

//class
// class beverages{
//     constructor(brand,name){
//         this.brand=brand;
//         this.name=name;
//     }
// }
// let g=new beverages("lehar","dew");
// console.log(g.name);

//new 

// let headphones=new Object();
// headphones.brand="Boat";
// headphones.type="neckband";
// console.log(headphones.type);

//Arguments

// function chips (brand,name,price){
//     console.log(brand);
//     console.log(name);
//     console.log(price);
//     console.log(arguments);

// }
// chips("frito","Lays",10,"Magic masala");


//default parameter

// function shirts(brand,color,colartype= "chinese",size){
//     console.log(brand);
//     console.log(color);
//     console.log(colartype);
//     console.log(size);
//     console.log(arguments);
// }
// shirts("the previlage club","white",undefined,"L","Formalwear");
// //shirts("arrow","Black",this.colartype,"L","Casualwear");

// let d=(a,b,c)=>{
//     let sum=a+b+c;
//     console.log("sum: "+sum);
// }
// d(1,2,3);

//SetTimeout

// function Bike(brand) {
//     console.log(brand+" is a superbike");
// }
// function Car() {
//     console.log("Supra is sports car");
// }
// setTimeout(Car,2000);
// Bike("Ninja zx10r")


//Template literals
// function bags(bname,color="black",capacity,purpose) {
//     console.log(`There are exciting ${bname} bags in the flipkart sale of ${color} color with ${capacity}l capacity, for ${purpose} grab it...!!!!!`);
// }
// bags("wildcraft",this.color,85,"trekking");

//call backfunction
//invoking a function inside another function 

// function Flipkart(Mnane,price) {
//     console.log(`The product ${Mnane} is available in Filpkart and with the price of ${price} rupees `);
// }

// function Amazon(Pname,price) {
//     console.log(`The product ${Pname} is available in amazon and with the price of ${price} rupees `);
// }

// function general(data1,data2,method){
//     method(data1,data2)
// }
// //general("vivo V73",19500,Flipkart)
// general("Nikon",68000,Amazon);
//set Timeouts

// function FireBolt(color,bcapacity,method) {
//     console.log(`FireBolt is a smartwatch of color ${color} with battery capacity${bcapacity} mah`);
//     setTimeout(()=>{
//         method("round","red");
//     },2000);
// }
// function Boat(Shape,color){
//     console.log(`Boat smart watch ${Shape} shaped of ${color} color`);
// }
// FireBolt("black",3000,Boat)

//Function Borrowing

// let general=
// {
//     name:"name",
//     pnum: 89123,
//     location:"loc",

//      create: function(data1){
//         console.log(`Mr./Mrs. ${this.name} with the ${this.pnum} phonenumber and from ${this.location} is registered sucessfully as ${data1}`);
//      }
        
//     }
// let customer=
// {
//     name:"Daniel Atlas",
//     pnum: 7760,
//     location:"Orlando",
// }
// let supplier=
// {
//     name:"Jack Wilder",
//     pnum: 99568,
//     location:"Miami"

// }
// let Employee=
// {
//     name:"Casey",
//     pnum: 89123,
//     location:"Texas"
// }

// // call
// //general.create.call(Employee,"Employee");

// //apply
// //general.create.apply(supplier,["supplier"]);

// // bind

// let y=general.create.bind(customer,"Customer");
// y();

// encapsulation 
//  class bank{
//     #accNum;
//     #AcHoldername="Micheal JayWhite";
//     bankName="Bank of Baroda";
//     ifsc="BARBOOO019";
//     #balance=19000;
    
//     getAccnum(){
//         return this.#accNum;
//     }
//     setAccnum(value){
//         this.#accNum=value;
//     }
//     getAccHolder(){
//         return this.#AcHoldername;
//     }
//     setAccHolder(value){
//         this.#AcHoldername=value;
//     }
//     getBalance(){
//         return this.#balance;
//     }
//     setBalance(value){
//         this.#balance=value;
//     }
//  }
//  let g=new bank();
//  console.log(g.bankName);
//  console.log(g.getAccHolder());
//  g.setAccHolder("Heath Ledger");
//  console.log(g.getAccHolder());
//  console.log(g.getAccnum());
//  g.setAccnum(191905);
//  console.log(g.getAccnum());
//  console.log(g.getBalance());
//  g.setBalance(38000);
//  console.log(g.getBalance());

//Encapsulation

// class encap{
//    #pid;
//    #Pname;
//    #Pprice;
//    constructor(pid,pname,pprice){
//     this.#pid=pid;
//     this.#Pname=pname;
//     this.#Pname=pprice;
//    }
//    getProductid(){
//     return this.#pid;
//    }
//    setProductid(value){
//     this.#pid=value;
//    }
//    getProductname(){
//     return this.#Pname;
//    }
//    setProductname(value){
//     this.#Pname=value;
//    }
//    getProductprice(){
//     return this.#Pprice;
//    }
//    setProductprice(value){
//     this.#Pprice=value;
//    }
// }
// let g=new encap(1001,"Fastrack",10400);
// console.log(g.getProductid());
// g.setProductprice(9999);
// console.log(g.getProductprice());


//closure

// function add(a,b) {
//     console.log("Add method");
//     ans=a+b;
//     return function sub(a,b) {
//         s=b-a;
//         console.log(s);
//         console.log(ans);
//     }
// }
// let h=add(2,8);
// h(4,9);

// Inheritance

// class watch{
//     wname="Fastrack";
//     Wprice=19800;
//     time(){
//         console.log("The current time ");
//     }
// }

// class clock extends watch{
//     cname="Ajanta";
//     cprice=3500;
//     ctime(){
//         console.log("The time is ");
//     }
// }
// let h=new clock();
// console.log(h.Wprice);
// h.time();


// let g=10;
// let s=20;
// class H{
//     pid=1001;
//     j() {
//         console.log("hi");
//     console.log(g);
//     console.log(s);
//     console.log("lo");
//    }
// }
// let f=new H();
// f.j();


/*const W=((a,b)=>{
sum=a+b;
console.log(sum);
}
)
W(1,2)*/

// let a=[1,2,3,4];
// let g=a.map((val)=> 'u');
// console.log(g); 

// console.log(a);
// var a=10;

//standard object
//  let add={
//     name:'smith',
//     occ:"Lawyer",
//     home:function(a,b){
//         sum=a+b
//         return sum
//     },
//     details:{
//         ph:8890,
//         car:"altroz"
//     }
//  }
//  console.log(add.home(2,3));

// function object

// function gs(a,b,c) {
//     this.a=a;
//     this.b=b;
//     this.c=c;
//     ;
// }
// let f=new gs(1,2,3);
// console.log(f.a);

//class

// class ds{
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
// }
// let f=new ds(2,3);
// console.log(f.a);


//new 

// let phones=new Object();
//     phones.name="vivo";
//     phones.battery=4000;
//     console.log(phones.battery);


//call back function

// function add(a,b) {
//     sum=a+b;
//     console.log(sum);
    
// }
//     function sub(c,d,e,method) {
//         subtract=c-d;
//         console.log(subtract);
//         method(subtract,e);
//     }
//     sub(8,3,2,add);


// function borrowing

// let mobile={
//     pname:"vivo",
//     pid:1905,
//     pprice:19950,
//     type:function(product){
//         console.log(` The ${product} ${this.pname} with ${this.pid} as product id is of price ${this.pprice}`);
//     }
// }
// let laptop={
//     pname:"Lenevo",
//     pid:1900,
//     pprice:49950,
// }
// // mobile.type.call(laptop,'laptop');
// // mobile.type("mobile");

// // mobile.type.apply(laptop,['laptop']);

// // let d=mobile.type.bind(laptop,'laptop')
// // d();

// class add{
//     #pid=200;
//     getproductid(){
//         return this.#pid;
//     }
//     setproductid(value){
//         this.#pid=value;
//     }
// }
// let g=new add();
// console.log(g.getproductid());
// g.setproductid(450);
// console.log(g.getproductid());

// class a{
//      b=20;
//      c=30;

// }
// class b extends a{
//     h=30;
//     j=60;
// }
// let g=new b();
//     console.log(g.b);

// over riding

// class a{
//      add() {
//         console.log("Hi");
//     }
// }
// class b extends a{
//     add(){
//         console.log("Hello");
//     }
// }
// let z=new b();
// z.add();


// synchronus
//  async function add() {
//     console.log("message 1");
//     console.log("message 2");
//    setTimeout(()=>{
//         console.log("message 3");

//     },2000);
//     console.log("message 4");
//     console.log("message 5");
//     console.log("message 6");
//     console.log("message 7");
//     console.log("message 8");
//     console.log("message 9");
//     console.log("message 10");
//     console.log("message 11");
//  }
//  add();

// async function add() {
//     console.log("message 2");
//     console.log("message 3");
//     console.log("message 4");
//     console.log("message 5");
// }
// console.log("message 1");
// add();
// console.log("message 6");
// await console.log("message 7");

//Promise

// let meeting=true;
// let prom=new Promise(function (resolve,reject) {
//     if (meeting) {
//         console.log("meeting successfull");
//     }
//     else{
//         console.log("meeting unsuccessfull");
//     }
// })
// console.log(prom);



// function prom(meeting) {
// return new Promise(function (resolve,reject) {
//     if (meeting) {
//         resolve("meeting successfull");
//     }
//     else{
//         reject("meeting unsuccessfull");
//     }
// })}
// let success=((result)=>{
//     console.log(result);
// })
// let unsucess=((failed)=>{
//     console.log(failed);
// })
// prom(false).then(success).catch(unsucess);

// function prom(meeting){
//     return new Promise(function(resolve,reject){
//         console.log("pending");
//         setTimeout(()=>{
//         if(meeting){
//             resolve("meeting succesfull");
//         }
//         else{
//         reject("meeting is unsuccessfull");
//         }
        
//     },2000)
//     }
//     )}

// let success=(result)=>{
//     console.log(result);
// }

// let unsuccessfull=(failure)=>{
//     console.log(failure);
// }
// prom(true).then(success).catch(unsuccessfull);

//async with promises
async function execute(){
    
    console.log("Login to the application");
    let p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Navigate to home page");
            reject("Error");
        },2000);
    })
    
    await p.then(msg=>console.log(msg)).catch(msg=> console.log(msg))
    
    console.log("logout");
    }
    execute();


// promise 

 function prom(meeting){
    let d= new Promise(function(resolve,reject){
        console.log("Pending....");
        setTimeout(()=>{

        if (meeting) {
            resolve("Meeting sucessfull");
        }
        else{
            reject("Meeting unsuccessfull");
        }
    },3000)
    })}
    let success=(result)=>{
         console.log(result);
    }
    let unsucess=(failure)=>{
        console.log(failure);
    }
     prom(true).then(success).catch(unsucess);