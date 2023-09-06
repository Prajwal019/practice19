// function login(callback) {
//     console.log("Login sucess");
//     //callback();
//      setTimeout(()=>{
//          callback();
//      },2000);
// }

// function fetchtitle() {
//     console.log("fetched the tittle");
// }
// login(fetchtitle)

//set timeouts

// function laptop(name) {
//     console.log(name+" is a gaming laptop");
// }
// function comp(bname,method) {
//     console.log("powered by "+bname);
//     setTimeout(()=>{
//         method("F17")

//     },3000)
// }
// comp("asus",laptop) 


//set Timeout
 function add(a,b) {
    console.log(a+b);
 }
 function sub(c,d) {
    
    console.log(c-d);
    setTimeout(()=>{
        add(2,3)
    },3000)
 }
 sub(5,1);