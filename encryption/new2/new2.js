let alph = "abcdefghijklmnopqrstuvwxyz0123456789";
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", ()=>{
    let span = document.getElementsByClassName("span")[0];
    if(span.innerText!==""){
        span.innerText="";
    }

    let inp2 = document.getElementsByClassName("inp")[0].value.toLowerCase();
    let res2 = document.getElementsByClassName("key")[0].value.toLowerCase();
    let inp = inp2.replaceAll(" ", "");
    let res = res2.replaceAll(" ", "");

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



    if(res.length!==inp.length){
        alert("Key length must be equal to word length");
        die();

}


        for(let j=0; j<inp.length;j++){
            if(!alph.includes(inp[j])){
                alert("the word must contain only English letters or numbers");
                die();
            }
    
    }
    
    let arr1=Array(inp.length),arr2=Array(res.length);
    for(let i=0;i<res.length;i++){
        arr1[i]=alph.indexOf(inp[i]);
        arr2[i]=alph.indexOf(res[i]);
    }
    let final="";
    for(let i=0;i<inp.length;i++){
        let arr=arr1[i]-arr2[i];
        if(arr<0){
            arr+=36;
        }
        final+=alph[arr];
    }
final=final.toLowerCase();
    span.innerText+=(`Result is: ${final}`);

});