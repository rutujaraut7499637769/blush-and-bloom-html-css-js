const products = [

{name:"Bioderma Photoderm Crème Claire SPF 50+ PA++++ Tinted Sunscreen with 8H Hydration | In Vivo Tested(50ml)",price:500,oldPrice:750,discount:"40% OFF",rating:"★★★★★ (1245)",image:"../images/spf.avif"},

{name:"Plum Cerasense Moisturizing Creme for Instant Barrier Repair & 72-Hr Moisturization(50g)",price:499,oldPrice:699,discount:"40% OFF",rating:"★★★★★ (842)",image:"../images/moist2.avif"},

{name:"Plum 5% Glycolic Acid & Goji Berry Exfoliating Toner for textured skin(150ml)",price:549,oldPrice:699,discount:"15% OFF",rating:"★★★★☆ (560)",image:"../images/toner1.avif"},

{name:" Foxtale Super Glow Face Wash, reduces tan, Boosts Glow - 100 ml",price:249,oldPrice:300,discount:"30% OFF",rating:"★★★★★ (910)",image:"../images/face-wash.webp"},

{name:"Hyphen 18% Brightening + 20% Collagen Double Serum (50ml)",price:699,oldPrice:750,discount:"35% OFF",rating:"★★★★☆ (420)",image:"../images/serum-pro.avif"},

{name:"MCaffeine Coffee Under Eye Cream for Dark Circle & Puffiness Reduction with Hyaluronic Acid & Vit E (15ml)",price:540,oldPrice:700,discount:"45% OFF",rating:"★★★★☆ (300)",image:"../images/eye-cream.avif"},

{name:"Hyphen 2% Kojic Acid Spf 30 Lip Balm With Vitamin C, 1% Vit E, Brightens Pigmented & Dark Lips(10g)",price:349,oldPrice:399,discount:"30% OFF",rating:"★★★★★ (210)",image:"../images/hyphen.webp"},

{name:"Garnier Micellar Cleansing Water For Sensitive Skin Gentle Cleanser & Make Up Remover(400ml)",price:400,oldPrice:600,discount:"10% OFF",rating:"★★★★☆ (120)",image:"../images/mu-remover.avif"},

{name:"JMsolution Pure Fish Collagen Green Mask 30ml",price:199,oldPrice:249,discount:"10% OFF",rating:"★★★★☆ (120)",image:"../images/face-mask.webp"},

{name:"Minimalist 10% Vitamin C Serum For Face For Glowing Skin 30ml",price:699,oldPrice:999,discount:"25% OFF",rating:"★★★★☆ (120)",image:"../images/dullness-serum.avif"},

{name:"Simple Kind to Skin Refreshing Facewash Mild Face Wash for Sensitive skin(250ml)",price:549,oldPrice:699,discount:"15% OFF",rating:"★★★★☆ (120)",image:"../images/simple.avif"},

{name:"Nykaa Skin Goodbye Blemish Acne Spot Patches - All Heart(20pcs)",price:251,oldPrice:399,discount:"20% OFF",rating:"★★★★☆ (120)",image:"../images/pimple-patch.avif"}
];

function showProducts(){

for(let i=0;i<products.length;i++){

document.getElementById("img"+(i+1)).src = products[i].image;

document.getElementById("p"+(i+1)).innerHTML =

"<h4>"+products[i].name+"</h4>"+
"<p class='price'>Rs "+products[i].price+
" <span class='old-price'>Rs "+products[i].oldPrice+"</span></p>"+
"<p class='rating'>"+products[i].rating+"</p>"+
"<button onclick='addCart(this)'>Add to Cart</button>";

document.getElementById("d"+(i+1)).innerHTML = products[i].discount;

}

}

function addCart(btn){

btn.innerHTML="Added";
btn.style.background="green";

}

showProducts();

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