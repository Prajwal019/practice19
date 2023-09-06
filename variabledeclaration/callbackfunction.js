
// callback function

// function add(a,b) {
//     console.log("sum ="+ (a+b));
// }
// function sub(a,b){
//     console.log("sub ="+a-b);
// }
// function result(a,b,method) {
//     method(a,b);
// }
// result(10,5,add);

// call back function

function internetBanking(Username,Password,bankname) {
    console.log("Logged in through internetBanking");
}
function mobileBanking(MobNum,pin) {
    console.log("Logged in through mobile banking");
}
function Login(data1,data2,data3,data4,method) {
    arguments[3](arguments[0],arguments[1],arguments[2]);
    arguments[4](arguments[0],arguments[1]);
}
Login(953555,236,"BoB",internetBanking,mobileBanking);
