let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(id){

const product=products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product added to cart!");

}

function showCart(){

const app=document.getElementById("app");

if(cart.length===0){

app.innerHTML="<h2>Your cart is empty.</h2>";

return;

}

let html="<h2>Shopping Cart</h2>";

cart.forEach(item=>{

html+=`

<p>

${item.name}

- ₹${item.price}

</p>

`;

});

app.innerHTML=html;

}