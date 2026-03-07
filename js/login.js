// Show/Hide Password
function togglePassword(){
    let pass = document.getElementById("password");
    let toggle = document.querySelector(".toggle-password");

    if(pass.type === "password"){
        pass.type = "text";
        toggle.innerText = "Hide";
    }else{
        pass.type = "password";
        toggle.innerText = "Show";
    }
}

// Login Validation
function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;
    let error = document.getElementById("errorMsg");

    if(email === "" || password === ""){
        error.innerText = "Please fill all fields!";
        return;
    }

    if(password.length < 6){
        error.innerText = "Password must be at least 6 characters!";
        return;
    }

    error.style.color = "green";
    error.innerText = "Login Successful!";

    if(remember){
        console.log("User wants to be remembered.");
    }
}

// Close Form
function closeForm(){
    document.getElementById("loginCard").style.display = "none";
}

