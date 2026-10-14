let images = [
    "https://farmtojar.com/wp-content/uploads/2023/12/IMG_3300-600x600.jpeg",
    "https://cdn.mos.cms.futurecdn.net/s6zGJ6fRHftHxF3WU8dXKA.jpg",
    "https://www.boutiquehotelier.com/2018/06/Barnsley.jpg"
];



let index = 0;

function changeHeroImage() {
    let hero = document.querySelector(".hero");

    if (!hero) return; // safety check

    hero.style.backgroundImage = `url(${images[index]})`;

    index = (index + 1) % images.length;
}

changeHeroImage();
setInterval(changeHeroImage, 3000);


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


