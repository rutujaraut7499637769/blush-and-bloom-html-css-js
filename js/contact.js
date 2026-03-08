alert("Welcome to blush & Bloom Contact Page🌸.");

let visitorCount = 0;
visitorCount++;

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    

    alert(`Hello ! ${name}.
    Thank you for contacting Blush & Bloom we received your message : ${message}
    
     
    Our team will contact you soon on ${email}`);


}