let state = { cart: {} };

function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveState();
}

function removeFromCart(id) {
  delete state.cart[id];
  saveState();
}

function updateQuantity(id, change) {
  if (state.cart[id]) {
    state.cart[id] += change;
    if (state.cart[id] <= 0) removeFromCart(id);
    saveState();
  }
}

function getTotalItems() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function saveState() {
  localStorage.setItem('cartState', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('cartState');
  if (saved) state = JSON.parse(saved);
}

loadState();