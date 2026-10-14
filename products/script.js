// ================= CART SYSTEM =================
function addToCart(name, price, img, qty = 1) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        img: img,
        qty: parseInt(qty)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}




// ================= QUANTITY CONTROL =================
function increaseQty(btn) {
    let qty = btn.parentElement.querySelector(".qty");
    qty.innerText = parseInt(qty.innerText) + 1;
}

function decreaseQty(btn) {
    let qty = btn.parentElement.querySelector(".qty");
    let value = parseInt(qty.innerText);

    if (value > 1) {
        qty.innerText = value - 1;
    }
}
