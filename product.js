function showProducts(){

const app=document.getElementById("app");

let html='<div class="products">';

products.forEach(product=>{

html+=`

<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

html+="</div>";

app.innerHTML=html;

}