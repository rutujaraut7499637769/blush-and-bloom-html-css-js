function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;
    let error = document.getElementById("errorMsg");

    if(email === "" || password === ""){
        error.style.color = "red";
        error.innerText = "Please fill all fields!";
        return;
    }

    if(password.length < 6){
        error.style.color = "red";
        error.innerText = "Password must be at least 6 characters!";
        return;
    }

    if(remember){
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
    } else {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
    }

    error.style.color = "green";
    error.innerText = "Login Successful!";

    setTimeout(function(){
        window.location.href = "../index.html";
    },1000);
}

window.onload = function(){
    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if(savedEmail && savedPassword){
        document.getElementById("email").value = savedEmail;
        document.getElementById("password").value = savedPassword;
        document.getElementById("remember").checked = true;
    }
}



function login() {

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "" || password === ""){
    alert("Please enter Email and Password");
}
else{
    alert("Login Successful 🌸");
    window.location.href = "../index.html";
}

}
