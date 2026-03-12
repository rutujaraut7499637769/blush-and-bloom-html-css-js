function morning(){
window.location.href="morning.html";
}

function night(){
window.location.href="night.html";
}

function done(btn){

// button change
btn.innerHTML="✔ Done";
btn.style.background="green";
btn.disabled = true;

// sagle buttons select kara
let buttons = document.querySelectorAll(".card button");

let allDone = true;

// check kara sagle done zale ka
buttons.forEach(function(b){
if(!b.disabled){
allDone = false;
}
});

// jar sagle done zale tar alert
if(allDone){
alert("Your skincare is done!");
}

}