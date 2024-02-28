





var alph = "abcdefghijklmnopqrstuvwxyz0123456789";
var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", ()=>{
    let span = document.getElementsByClassName("span")[0];
    if(span.innerText!==""){
        span.innerText="";
    }


    var inp2 = document.getElementsByClassName("inp")[0].value.toLowerCase();
    var res2 = document.getElementsByClassName("key")[0].value.toLowerCase();

    var inp = inp2.replaceAll(" ", "");
    var res = res2.replaceAll(" ", "");

    if(document.getElementsByClassName("inp")[0].value.length>document.getElementsByClassName("key")[0].value.length){

    for(let i=0;i<document.getElementsByClassName("inp")[0].value.length-document.getElementsByClassName("key")[0].value.length;i++){
        res+=alph[Math.floor(Math.random()*alph.length)];
}
    }

    else{
        let y=res;
        res="";
        for(let i=0;i<document.getElementsByClassName("key")[0].value.length-document.getElementsByClassName("inp")[0].value.length;i++){
        res+=y[i];
    }
    }

console.log( res);


    for(let j=0; j<inp.length;j++){
        if(!alph.includes(inp[j])){
            alert("the word must contain only English letters or numbers");
            die();
        }

    }





// console.log( document.getElementsByClassName("inp")[0].value);
// function generat(){

//     if(inp.length>res.length){

//         var randcode=alph.charAt(Math.floor(Math.random() * alph.length));
//         var randcode2=String.fromCharCode(randcode);
//         return randcode2;
//     }
// }
// console.log(generat());

    
    let arr1=Array(inp.length),arr2=Array(res.length);
    for(let i=0;i<res.length;i++){
        arr1[i]=alph.indexOf(inp[i]);
        arr2[i]=alph.indexOf(res[i]);
    }
    let final="";
    for(let i=0;i<inp.length;i++){
        let arr=arr1[i]+arr2[i];
        if(arr>=36){
            arr%=36;
        }
        final+=alph[arr];
    }

final=final.toUpperCase();


    span.innerText+=(`Result is: ${final}`);

});







