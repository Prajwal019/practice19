class encap{
    #accnum=5678;
    getAcno(){
        return this.#accnum;
    }

    setAcno(val){
        this.#accnum=val;
    }
}
let g=new encap();
console.log(g.getAcno());
g.setAcno(1905);
console.log(g.getAcno());