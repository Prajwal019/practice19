// let arr=[10,20,"Hi",'P',19.05];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }


//Concat 

// let arr=[19,20.5,"Hello",'P',2020];
// let arr1=[36,92.5,"Hi",'S',2023];
// //console.log(arr.concat(arr1));
// arr2=arr.concat(arr1);
// for (let index = 0; index < arr2.length; index++) {
//    console.log(arr2[index]);
    
// }


// //copywithin
// let arr=[19,20.5,"Hello",'P',2020];

//console.log(arr.copyWithin(1,2,4));
//19,hello,p,hello,p,2020
//let arr1=[36,92.5,"Hi",'S',2023];
// let arr2=arr.copyWithin(1,2,3);

// for (let index = 0; index < arr2.length; index++) {
//        console.log(arr2[index]);
        
//     }
// const cars=["BMW","GTR","Mercedes"];
// console.log(cars);
// cars.forEach(element => {
//     console.log(element);
// });


//Methods of Array


// 1) concat
// let arr=[10,20,"Hi",'P',19.05];
// var ar=[40,50,"lol",'s'];
// //console.log(arr.concat(ar));
// let g=arr.concat(ar);
// for (let index = 0; index < g.length; index++) {
    
//     console.log(g[index]);
// }


// 2) copywithin
// let arr=[10,20,"Hi",'P',6,8,"Hello",19];
// let g=arr.copyWithin(0,4,6);
// for (let index = 0; index < g.length; index++) {
//         console.log(g[index]);
//      } 


// 3)  entries
// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let itter = arr.entries()
// for(const obj of itter)
// {
//     console.log(obj);
// }


 

//4) length
// let arr=[10,20,"hi",'p','s',19,"Hello"];
// console.log(arr.length);

//5) join

// let arr=[10,20,"hi",'p','s',19,"Hello"];
// arr.forEach(element=>
//     console.log(element)
//     );


    // let arr=[10,20,"hi",'p','s',19,"Hello"];
    // let s=arr.map((element) =>element+element)
    // console.log(s);

//     let arr=[10,20,"hi",'p','s',19,"Hello"];
//     //var ar=[40,50,"lol",'s'];
//     let g=arr.includes("hh");
//     //let g=arr.flatMap(1,2);
//   //  let g=arr.flat(1,2);
//    console.log(g);


// let arr=[10,20,"hi",'p','s',19,"Hello"];
//    let g= arr.indexOf(100);
//    console.log(g);

// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let g=arr.keys();
// for (const key of g) {
//     console.log(key);
// }

// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let g=arr.lastIndexOf('s',2);
// console.log(g);

// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let g=arr.toLocaleString();
// console.log(g);

// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let g=arr.values();
// for (const k of g) {
//    console.log((k));
//     }


// let arr=[10,20,"hi",'p','s',19,"Hello"];
// let g=arr.find((num)=> num==20);
// console.log(g);

// let arr=[2,3,4,5,7,8];

// let res=arr.some((num)=> num>144);

// // function greaterthanfour(num) {
// //    return  num>4;
// // }
// console.log(res);

// let arr=[2,3,4,5,7,8];

// let g=arr.filter((num)=>num%2==0);
// console.log(g);

// const people=[
//     {
//         name: 'folrin',
//         age: 28
//     },
//     {
//         name:' evan',
//         age: 19
//     },
//     {
//         name:'jai',
//         age: 15
//     }
// ]
// var d=people.find((people)=> people.age==19);
// console.log(d);

// let arr=[3,4,5,7,8,6,9,2];
// let g=arr.every((num)=>num%1==0);
// console.log(g);

// let arr=new arr(10,20,30);
// console.log(arr);

// let arr=[10,20,"hi",'p','s',19,"Hello",'m','n','po'];
// let g=arr.copyWithin(2,5,7);
// for (let index = 0; index < g.length; index++) {
    
//     console.log(g[index]);
// }
// let ar =new ar("a",10,3);
// console.log(ar);

// let a=[5,7,6,9,14,19];
// let g=a.sort((num)=> num%2==0);
// console.log(g);
//  let a="20";
//  let g=a.valueOf();
//  console.log(typeof(g));

// var a='19';
// console.log(typeof(a));
// let f=a.valueOf();
// console.log(typeof(f));

// let arr=[1,[2,[3,[4]]]];
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

// let arr=[3,4,5,6,7,6,5,5,6];
//let g= arr.sort((a,b)=>a-a);
// let g=arr.map((value)=>value+(value*0.1));
// let g=arr.filter((val)=>val%3==0)
// let itr=arr.entries();
// for (const i of itr) {
//     console.log(i);
// }
// let g=arr.every((val)=>val%2==1);
// console.log(g);
// delete arr[2];
// console.log(arr);
// let g=arr.find((val)=> val%2==0);
// console.log(g);

// let g=arr.slice(1);
// console.log(g);
//console.log(arr);

 
//let arr=[1,[2,[3,[4,[5,[6]]]]]];
// let arr=[3,4,5,6,7,6,5,3,6,1];
// let g=arr.splice(0,4,11,12);
// let f=arr.slice(0,4);
//  console.log(g);
//  console.log(arr);
// // let g=arr.flat(2);
// // console.log(g);
// let ar=[11, 12, 7, 6, 5,  3, 6, 1];
// let d=ar.reverse();
// console.log(d);
// let a=100;
// let g =Math.sqrt(a);
// console.log(g);
// // let h=Math.random(100 500);
// // console.log(h);

 let  d=new Date();
 console.log(d.toDateString());
//  console.log(d.getFullYear());
//  console.log(d.getUTCFullYear());
 console.log(d.getTime());
 console.log(d.getTimezoneOffset());

