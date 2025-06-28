const plantDetails = {
  plant1: { name: "Peace Lily", price: 15, img: "images/plant1.jpg" },
  plant2: { name: "Snake Plant", price: 18, img: "images/plant2.jpg" },
  plant3: { name: "Aloe Vera", price: 12, img: "images/plant3.jpg" },
  plant4: { name: "Echeveria", price: 10, img: "images/plant4.jpg" },
  plant5: { name: "English Ivy", price: 20, img: "images/plant5.jpg" },
  plant6: { name: "Pothos", price: 17, img: "images/plant6.jpg" },
};

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let totalItems = 0, totalCost = 0;
  for (const id in state.cart) {
    const qty = state.cart[id];
    const plant = plantDetails[id];

    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${plant.img}" width="50"> ${plant.name} - $${plant.price} x ${qty}
      <button onclick="updateQuantity('${id}', 1); renderCart();">+</button>
      <button onclick="updateQuantity('${id}', -1); renderCart();">-</button>
      <button onclick="removeFromCart('${id}'); renderCart();">Delete</button>
    `;
    container.appendChild(div);

    totalItems += qty;
    totalCost += plant.price * qty;
  }
  document.getElementById('total-items').innerText = totalItems;
  document.getElementById('total-cost').innerText = totalCost.toFixed(2);
  updateCartIcon();
}

renderCart();
