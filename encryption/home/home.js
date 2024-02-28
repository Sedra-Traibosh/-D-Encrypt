



var infarr=["D/Encrypt ","website, ","you ","can ","encrypt ","any ","message ","with ","complete "
,"confidentiality, ","and ","you ","can ","also ","decrypt ","any ","encrypted  "
,"message, ","You  ","can  ","try  ","this ","by ","clicking "
," Start "," in "," the ","top ","bar.","Encryption ","is ","the ","method ","by ","which ",
"information ","is ","converted  ","into ","secret ","code ","that "," hides "," the "
,"information's ","true ","meaning. ","The ","science "," of ","encrypting","and ","decrypting ","information ","is ","called ","cryptography."]
var i = 0;console.log(infarr.length);
window.addEventListener("load",function(){
    var sel = setInterval(()=>{
        if(i===29){
            document.getElementsByClassName("f1")[0].innerHTML+="<br>";
        }
        if(i===56){
            clearInterval(sel);
        }
            document.getElementsByClassName("f1")[0].innerHTML+=infarr[i];
        
        i++ ;
    },100);
});

