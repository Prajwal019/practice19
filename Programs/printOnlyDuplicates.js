let g="Prajwalsr"
let f;
for(let i=0;i<g.length;i++){
    f=g.charAt(i);
    //console.log(g);
}
let a=g;
for (let i =0; i < a.length;i++) {
  let count=0;
    for (let j = 0; j < a.length; j++) {
        if(a[i]==a[j]){
            {
                if(j<i){
                    break;
                }
                count++;
            }
        }
       
    }
    if(count>1){
        console.log(g[i]);
    }
}

