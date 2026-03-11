const products = [

{name:"COSRX Snail Mucin Mask",price:150,oldPrice:250,discount:"40% OFF"},
{name:"I'm From Ginseng Serum",price:1230,oldPrice:2050,discount:"40% OFF"},
{name:"Dr Althea Relief Cream",price:2124,oldPrice:2499,discount:"15% OFF"},
{name:"VT Cosmetics Reedle Shot",price:3149,oldPrice:4499,discount:"30% OFF"},
{name:"COSRX Acne Bundle",price:2569,oldPrice:3950,discount:"35% OFF"},
{name:"JMsolution Brightening Mask",price:540,oldPrice:990,discount:"45% OFF"},
{name:"Collagen Booster Bundle",price:875,oldPrice:1250,discount:"30% OFF"},
{name:"Rice Bran Sheet Mask",price:180,oldPrice:200,discount:"10% OFF"}

];

function showProducts(){

for(let i=0;i<products.length;i++){

document.getElementById("p"+(i+1)).innerHTML=

`
<h4>${products[i].name}</h4>
<p class="price">Rs ${products[i].price}</p>
<p class="old-price">Rs ${products[i].oldPrice}</p>
<button onclick="addCart(this)">Add to Cart</button>
`;

document.getElementById("d"+(i+1)).innerHTML=products[i].discount;

}

}

function addCart(btn){

btn.innerHTML="✔ Added";
btn.classList.add("added");

}

/* SEARCH FUNCTION */

function searchProduct(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();

let cards = document
.getElementsByClassName("product-card");

let names = document
.getElementsByTagName("h4");

for(let i=0;i<names.length;i++){

if(names[i].innerHTML
.toLowerCase()
.includes(input)){

cards[i].style.display="block";

}
else{

cards[i].style.display="none";

}

}

}

showProducts();