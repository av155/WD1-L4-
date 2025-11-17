let cartCount = 0;

document.getElementById("addCartBtn").addEventListener("click", function() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
});
