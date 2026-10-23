function addToCart(name, price, image, quantity = 1) {


    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    if (typeof resetQuantity === "function") {
        resetQuantity();
    }
    document.getElementById("number").value = 1;
    alert(name + " Added to Cart");
}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(function (item) {
        totalItems += item.quantity;
    });

    let count = document.getElementById("cartCount");

    if (count) {
        count.innerHTML = totalItems;
    }
}



function clearCart() {

    localStorage.removeItem("cart");

    updateCartCount();

    location.reload();
}
updateCartCount();