// Helper to get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = count;
}

function addToCart(data) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === data.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...data, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
}

function initMenuPage() {
  // Smooth scrolling for category links
  document.querySelectorAll('.category-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 120, // offset for sticky header + nav
          behavior: 'smooth',
        });
      }
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.btn-add').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const id = parseInt(card.dataset.id, 10);
      const name = card.querySelector('.product-name').textContent.trim();
      const priceText = card.querySelector('.product-price').textContent.trim();
      const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
      addToCart({ id, name, price });
    });
  });
}

function initCartPage() {
  const cartContainer = document.getElementById('cart-items');
  const cartTotalElem = document.getElementById('cart-total');
  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    cartTotalElem.textContent = '$0.00';
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <span class="item-name">${item.name}</span>
        <span class="item-qty">x${item.qty}</span>
        <span class="item-price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `
    )
    .join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalElem.textContent = `$${total.toFixed(2)}`;
}

// Initialize depending on page
if (document.body.classList.contains('menu-page')) {
  initMenuPage();
  updateCartCount();
} else if (document.body.classList.contains('cart-page')) {
  initCartPage();
  updateCartCount();
}