let visitorCount = 0;
visitorCount++;

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("Message", message);

    alert(`Hello ! ${name}.
    Thank you for contacting Blush & Bloom we received your message : ${message}
    
    Our team will contact you soon on ${email}`);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}