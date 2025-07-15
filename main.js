let quantity = 1;
const pricePerItem = 600.72;

const quantitySpan = document.getElementById('quantity');
const totalPriceSpan = document.getElementById('total-price');

function updateTotal() {
  const total = (pricePerItem * quantity).toFixed(2);
  totalPriceSpan.textContent = `$${total}`;
}

function increaseQty() {
  quantity++;
  quantitySpan.textContent = quantity;
  updateTotal();
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updateTotal();
  }
}
