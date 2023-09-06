// class product
// {
//     pname="laptop";
//     price="89950";
//     brand="Asus";
   
//     pdetails(){
//         console.log(`Product details are as follows ${this.pname} ${this.price} ${this.brand}`);
//     }
// }

// class order extends product
// {
//     orderid=1456;
//     pdetails(){
//         console.log(`The order id of the purchased product is ${this.orderid}`);
//         super.pdetails();
//     }

// }

// let g=new order();
// g.pdetails();

// class a
// {
//     add(){
//         console.log("Addition");
//     }
// }

// class b extends a
// {
//     add(){
        
//         console.log("Subtraction");
//         super.add();
        
//     }
// }

// let d=new b();
// d.add();

class person
{
    constructor(name){

        this.name=name;
        this.occupation="Unemployed";
    }
    greet(){
        console.log(`The person name is ${this.name} and occupation is ${this.occupation}`);

    }

}

class student extends person
{
    constructor(name){
        super(name);
        //this.occupation="Student";
    }
    greet(){
        console.log(`The student name is ${this.name} and occupation is ${this.occupation}`);
        super.greet();
    }

}
let g=new student("Casey");
g.greet();