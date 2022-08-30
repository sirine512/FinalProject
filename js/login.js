let info=document.querySelector("#Sin")

let btnSign=document.querySelector("#signIn");

btnSign.addEventListener('click',(e) =>{
    if (info.value==""){
        alert("please check your informations");
        info.focus();
        e.preventDefault()
    }
    else{
        alert("Welcome! Enjoy.");
        return true
    
    }});
 /********signup */  
 let infos=document.querySelector("#sup") 
let btn = document.querySelector("#sign");
btn.addEventListener("click",function(e) {
    if (infos.value==""){
        
        alert("please check your informations");
        infos.focus();
        e.preventDefault()
    } else{
 confirm("Welcome to our website,Are you sure about your infomations?"); 

}});
/************** */
// let btnV = document.querySelector(".button");
// btnV.addEventListener("click",function()                                    
// { 
//     var name = document.querySelectorAll("#user")               
//     var email = document.querySelectorAll("#email");     
//     var password = document.querySelectorAll("#passW");  

//     if (name.value == "")                                  
//     { 
//         alert("Enter your name"); 
//         name.focus(); 
//         return false; 
//     }    
          
//     if (email.value == "")                                   
//     { 
//         alert("Enter a valid email."); 
//         email.focus(); 
//         return false; 
//     }    
//     if (email.value.indexOf("@", 0) < 0)                 
//     { 
//         alert("Enter a valid email."); 
//         email.focus(); 
//         return false; 
//     }    
//     if (email.value.indexOf(".", 0) < 0)                 
//     { 
//         alert("Enter a valid email."); 
//         email.focus(); 
//         return false; 
//     }    
     
//     if (password.value == "")                        
//     { 
//         alert("Enter your password."); 
//         password.focus(); 
//         return false; 
//     }    
     
//     return true; 
// });



