


function searchProduct(){

let input = document.getElementById("searchBar").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(title.indexOf(input) > -1){
cards[i].style.display="";
}else{
cards[i].style.display="none";
}

}

}




let buttons = document.querySelectorAll(".card button");

buttons.forEach(function(btn){

btn.addEventListener("click", function(){

btn.innerText = "Added";
btn.classList.add("added");

});

});