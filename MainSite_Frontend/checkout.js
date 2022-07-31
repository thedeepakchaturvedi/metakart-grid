

document.addEventListener('DOMContentLoaded', function() {
    setPrice();
}, false);


function setPrice()
{
    var price=document.getElementById("price");
    var totalPrice=document.getElementById("totalPrice");
    var quantity=document.getElementById("quantity");
    var temp= JSON.parse(localStorage.getItem('price') || {});
    var q= JSON.parse(localStorage.getItem('quantity') || {});
    price.innerHTML="$ "+temp;
    totalPrice.innerHTML="$"+(temp+8);
    quantity.innerHTML=q;
}

