let parent = document.querySelector(".parent")
let inp = document.querySelector(".inp")
let btn = document.querySelector(".btn")
let text = document.querySelector(".text")

let rand = Math.floor(Math.random() * 7) + 1;

let tries = 5;
let win = 0;
btn.addEventListener("click", function() {
    if(inp.value != rand){
        text.style.color = "red"
        tries--;
     text.textContent = inp.value + " is wrong number" + ` you have ${tries} tries left`
    inp.value = ""
     if(tries == 0){
        
         btn.disabled = true
         text.textContent = 'you fail'
         btn.textContent = "play again"
        inp.value = ''
     }
  //  check()
    }else {
        win = 1;
        text.style.color = "green"
    text.textContent = inp.value + " was correct answer you win"
    btn.disabled = true;
    btn.textContent = "winner"
    inp.value = ""
    }
})
/*
function check(){
    if(tries == 0){
        btn.textContent = "play again"
        tries = 5;
  /*  btn.addEventListener("click", function() {
        btn.textContent = "guess"
        btn = ck()
    })*/
 /*   }
}*/


let re = document.querySelector(".replay")//.style.display = "none"

re.addEventListener("click", function(){
   if(tries == 0){
    tries = 5;
    btn.disabled = false;
    btn.textContent = "guess";
    text.textContent = ""
    rand = Math.floor(Math.random() * 10) + 1;
  //  document.querySelector(".replay").style.display = "contents"
   } else if(win > 0){
       text.textContent = ""
       btn.disabled = false;
       tries = 5;
       btn.textContent = "guess"
       rand = Math.floor(Math.random() * 10) + 1;
       inp.value = ""
   }
})