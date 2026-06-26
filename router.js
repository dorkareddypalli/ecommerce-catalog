function router(){

const hash=location.hash||"#home";

if(hash=="#home"){

showProducts();

}

if(hash=="#products"){

showProducts();

}

if(hash=="#cart"){

showCart();

}

}

window.addEventListener("hashchange",router);