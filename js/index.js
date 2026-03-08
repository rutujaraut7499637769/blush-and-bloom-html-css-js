let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(function(){

slides[i].classList.remove("active");

i++;

if(i == slides.length){
i = 0;
}

slides[i].classList.add("active");

},3000);

