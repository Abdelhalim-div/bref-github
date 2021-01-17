let user=document.querySelector("#inscri");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let btn=document.querySelector("#btn");
btn.oncklick=function(){
   
    
}
btn.addEventListener('click',function() {
if(user.value===""||email.value===""||password.value===""){
    alert("inserer les info"); 
}

else{
    localStorage.setItem('user',user.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
}
if(user&&email&&password){
    setTimeout(()=>{
        window.location="log-in.html";
    },1500);
}
});