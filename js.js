let img = document.querySelector("img");
let div = document.querySelector('div');
let open = false;

img.onclick=function(){
    if(open == false){
        div.style.transform = "rotate(0deg)";
        div.style.width = "100vw";
        div.style.maxWidth = "100vw";
        div.style.position = "relative";
        div.style.top = "-150px";
        // div.style.left = "-40px";
        div.classList.add('no-pseudo');
        img.style.width = "100vw"; 
        open = true
    } else{
        div.style.transform = "rotate(7deg)";
        div.style.width = "70%";
        div.style.position = "static";
        // div.style.left = "0";
        div.classList.remove('no-pseudo');
        img.style.width = "100%"; 
        div.style.maxWidth = "300px";
        open = false
    }
}

// img.onclick=function(){
//     if(open == true){
      
//     }
// }