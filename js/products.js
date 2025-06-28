function addProduct(id, btn) {
  addToCart(id);
  btn.disabled = true;
  updateCartIcon();
}

function updateCartIcon() {
  document.getElementById('cart-count').innerText = getTotalItems();
}

updateCartIcon();