let bikes=
{
    bname:"Aprilla",
    cc:1450,
    TS:280,
    purpose: function (msg){
        console.log(`Marcus Marq -${msg}`);
    },
    contend: function (msg) { 
        console.log(`Valentino Rossi-${msg}`);
    }

}
 g=Object.create(bikes);
 console.log(g);
 g.bname="Ducati";
 g.cc=1250;
 g.TS=320;
 g.purpose=function(msg){
    console.log(`Rhonda ${msg}`);
 }
 g.contend=function(msg){
    console.log(`Petronas ${msg}`);
 }
 console.log(g.bname);
 console.log(g.cc);
 console.log(g.TS);
 g.purpose(25);
 g.contend(56);