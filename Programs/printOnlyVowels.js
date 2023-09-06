let s="India"; 
var g;
for (let i=0; i<s.length ; i++) {
     g=s.charAt(i);
   
   if (g>='a'&&g<='z'||g>='A'&&g<='Z') {
    
    if(g==='a'||g=='e'||g=='i'||g=='o'||g=='u'||g=='A'||g=='E'||g=='I'||g=='O'||g=='U'){
        console.log(g);
    }
    else{
     
    }
    }
}
