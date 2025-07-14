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

  // Demon writer animation on section enter
  const sections = document.querySelectorAll('.menu-section');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateSection(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  function animateSection(section) {
    const title = section.querySelector('.section-title');
    if (!title) return;

    // Create demon element (emoji)
    const demon = document.createElement('span');
    demon.className = 'demon';
    demon.innerHTML = '&#128127;'; // 😈 emoji
    title.appendChild(demon);

    // Reveal title after short delay as if demon wrote it
    setTimeout(() => {
      title.classList.add('written');
    }, 400);

    // Stagger product card appearance
    const cards = section.querySelectorAll('.product-card');
    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${0.6 + idx * 0.15}s`;
    });

    // Add show class to trigger product card transitions
    section.classList.add('show');

    // Clean up demon element after animation completes
    demon.addEventListener('animationend', () => demon.remove());
  }
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