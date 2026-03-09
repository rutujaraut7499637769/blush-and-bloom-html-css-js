
const products = [
{ name:"Face Wash", price:199, image:"./../images/face wash.png"},
{ name:"Aloe Vera Gel", price:249, image:"./../images/aloevelagal.png"},
{ name:"Vitamin C Serum", price:499, image:"./../images/vital vitamin c serum.png"},
{ name:"Moisturizer", price:299, image:"./../images/moisturizing.png"},
{ name:"Sunscreen SPF 50", price:399, image:"./../images/premium.png"},
{ name:"Night Cream", price:450, image:"./../images/nightcream.png"},
{ name:"Face Scrub", price:220, image:"./../images/facescrup.png"},
{ name:"Under Eye Cream", price:350, image:"./../images/UnderEyeCream.png"}
];

const productList = document.getElementById("productList");



products.forEach((product,index)=>{

productList.innerHTML += `
<div class="card">

<img src="${product.image}" class="product-img" onclick="openGallery('${product.image}')">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<div class="qty-box">

<button onclick="decrease(${index})">-</button>

<span id="qty${index}">1</span>

<button onclick="increase(${index})">+</button>

</div>

<button onclick="addCart(this)">Add to Cart</button>

</div>
`;

});




function addCart(btn){

btn.innerText="Added";
btn.classList.add("added");

}




function increase(id){

let qty=document.getElementById("qty"+id);
qty.innerText=parseInt(qty.innerText)+1;

}

function decrease(id){

let qty=document.getElementById("qty"+id);

if(qty.innerText>1){
qty.innerText=parseInt(qty.innerText)-1;
}

}




function openGallery(img){

let gallery=document.createElement("div");
gallery.classList.add("gallery");

gallery.innerHTML=`
<div class="gallery-box">

<img src="${img}">

<button onclick="closeGallery()">Close</button>

</div>
`;

document.body.appendChild(gallery);

}

function closeGallery(){

document.querySelector(".gallery").remove();

}




function searchProduct(){

let input=document.getElementById("searchBar").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let name=card.querySelector("h3").innerText.toLowerCase();

if(name.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}