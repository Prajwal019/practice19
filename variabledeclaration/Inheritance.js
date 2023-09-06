class product
{
    pname="laptop";
    price="89950";
    brand="Asus";

     pdetails(){
        console.log(`Product details are as follows ${this.pname} ${this.price} ${this.brand}`);
    }
}

class order extends product
{
    orderid=1456;
    oDetails(){
        console.log(`The order id of the purchased product is ${this.orderid}`);
    }

}
let g=new order();
console.log(g.pname);
console.log(g.price);
console.log(g.brand);
g.oDetails();
g.pdetails();