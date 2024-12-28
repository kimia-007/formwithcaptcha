let formcaptcha=document.querySelector("#form>.captcha>.content")
let refreshbtn =document.querySelector(".refresh");
let loginbtn =document.querySelector("#login");
let captchainput =document.querySelector("#captcha");
let usernameinput =document.querySelector("#username");
let passwordinput =document.querySelector("#password");
let errerrormessage =document.querySelector(".errormessage");
 

let randomcaptcha=""
function generatecaptcha(){
    let maincaptcha ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

 randomcaptcha= maincaptcha.at(Math.round(Math.random()*maincaptcha.length-1))+
maincaptcha.at(Math.round(Math.random() *maincaptcha.length))+
maincaptcha.at(Math.round(Math.random() *maincaptcha.length))+
maincaptcha.at(Math.round(Math.random() *maincaptcha.length));

formcaptcha.innerHTML=randomcaptcha;//با هر refresh عوض میشه
}
generatecaptcha()//بار اول پر شود

refreshbtn.addEventListener("click",function(){
    generatecaptcha()
});

function seterror(message){
    errerrormessage.innerHTML=message;
    errerrormessage.classList.add("active")
    generatecaptcha()//برای امنیت وقتی اشتباه زد باید دوباره عوض شود
    captchainput.value='';//باید خالی شود
    usernameinput.value='';//باید خالی شود
    passwordinput.value='';//باید خالی شود
}

loginbtn.addEventListener("click",function(e){
   e.preventDefault()//از دیفالت و ارسال یک پست خودداری میکند
    let captchainputvalue=captchainput.value;
    let usernameinputvalue=usernameinput.value;
    let passwordinputvalue=passwordinput.value;
    // console.log("randomcaptcha",randomcaptcha);
    // console.log("captchainputvalue",captchainputvalue);
    if(randomcaptcha===captchainputvalue){
        errerrormessage.innerHTML="";
        errerrormessage.classList.remove("active")
        if(usernameinputvalue==="kimia" && passwordinputvalue==="2526"){ 
            errerrormessage.innerHTML="";
            errerrormessage.classList.remove("active")
            location.href="https://divar.ir"

        }else{
            seterror ("invalid username or password")
       
        }
    }
    else{
        seterror("invalid captcha")
    }
 
});