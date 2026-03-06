alert("Welcome to blush & Bloom Contact Page.");

let visitorCount = 0;
visitorCount++;

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let age = prompt("Enter your age");

    age = parseInt(age);

    alert(`Hello ${name}!
    Thank you for contacting Blush & Bloom we received your message: ${message}
    Your age: ${age} 
     
    Our team will contact you soon on ${email}`);


}