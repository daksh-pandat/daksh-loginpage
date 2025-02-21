document.getElementById("togglePassword").addEventListener("click",function(){

    let passwordField= document.getElementById("userPassword");

    if( passwordField.type==="password"){
        passwordField.type ="text";
        togglePassword.textContent="❌";

    }else {
         passwordField.type ="password";
         togglePassword.textContent="👁️";
        }
});