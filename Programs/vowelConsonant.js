let s="Pnuemonoultrascopicsilicovolcanoconiosis"; 
var count=0;
var count1=0;
let vowel=[]
let con=[]
var g;
for (let i=0; i<s.length ; i++) {
     g=s.charAt(i);
   
   if (g>='a'&&g<='z'||g>='A'&&g<='Z') {
    
   
    if(g==='a'||g=='e'||g=='i'||g=='o'||g=='u'||g=='A'||g=='E'||g=='I'||g=='O'||g=='U'){
        //console.log(g);
        vowel.push(s[i])
        count++;
    }
    else{
        con.push(s[i])
        count1++;
    }
    }
}
console.log("Vowel :" +count);
console.log("Consonant :"+count1);
console.log(vowel);
