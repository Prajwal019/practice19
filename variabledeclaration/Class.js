// class practice
// {
// static a=20;
//        b=30;
       
//     constructor(aa,bb){
//          this.aa=aa;
//          this.bb=bb;
//          //console.log("sum: "+ (aa+bb));
//     }
//     static demo(){
//          let e=new practice(2,1);
//         console.log(practice.a);
//         console.log(e.b);

//     }

//     test(){
//         console.log(this.b);
//         console.log(practice.a);
//     }
// }

//  let d=new practice(10,20);
//  practice.demo();
//  d.test();
//  console.log(d.aa + d.bb);

// class print{
//     static a=10;
//     b=20;
//     constructor(){

//     }
//      static add(){
//        let sum=print.a+new print().b;
//        console.log(sum);
//      }
//      sub(){
//         let subtract=print.a-this.b;
//         console.log(subtract);
//      }
// }
// print.add();
// let g=new print();
// g.sub();


let a=20;
class add{
   sub() {
    console.log("hi");
    console.log(a);
  }
}
const g=new add();
g.sub();