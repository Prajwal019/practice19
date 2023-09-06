//while loop

// let a=10;
// while (a>0) {
//     console.log("Shobhan");
//     a--;
// }

// do-while loop
// let value=1;
// do 
//     console.log("Shobhan");

// while (value<11){
//     value++;
// }

//let arr=[10,"Hello",false,null,25.64,'h'];
// for (let index = 0; index < arr.length; index++) {
//     console.log(index+" "+arr[index]);
// }
// let a=[10,20,30,40,50,60];
//  for (const index in a) {
//     console.log(a[index]);
//  }

// for (const i of a) {
//     console.log(i);
// }


//for each

//let a=[10,20,30,40,50];
// a.forEach(e => {
//     console.log(e)
// });

// let a=[10,20,30,40,50];
// for (var i of a) {
//     console.log(i);
// }
// a.forEach(element => {
//     console.log(element);      
// });

let a=["hello",10,19.19, ,true,null];
// for (const k in a) {                   ignores
//     console.log(a[k]);        
// }

// for (const i of a) {
//     console.log(i);                        undefined
// }


// a.forEach(element => {
//     console.log(element);                       
// });


// for (let index = 0; index < a.length; index++) {
//     console.log(a[index]);                             undefined
// }


var v=a.length
//console.log(v);
//while loop
// let i=0;
// while (i<v) {
//     console.log(a[i]);
//     i++;
// }

// do while

let j=0;
do {
    console.log(a[j]);  
    j++;
} 
while (j<v);
