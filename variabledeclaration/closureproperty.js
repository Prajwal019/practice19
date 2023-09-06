// var c=19;
// console.log(c);
// function outer(){
//     let outervar=0;
//     console.log("Hello");
//     return function inner(){
//         console.log(outervar);
//     }
//     inner()
// } 
// let ret=outer();
// ret();



function outer() {
     let c=20;
     console.log("Hello");
     function inner(){
        console.log(c);
     }
     inner();
}
outer();


// function outermost(){
//     let d=20;
//     return function inner(){
//         console.log(d);
//         let f=30;
//        return function innermost(){
//             console.log(d);
//             console.log(f);
//         }
//     }
// }
// let hr=outermost();
// hr()();