// Cart state management
let cart = [];
let cartTotal = 0;

// DOM Elements
const cartCountElement = document.getElementById('cartCount');
const cartTotalElement = document.getElementById('cartTotal');
const cartItemsContainer = document.getElementById('cartItems');
const cartPage = document.getElementById('cartPage');
const mainContent = document.querySelector('body');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupCategoryNavigation();
    setupCartIconClick();
    updateCartDisplay();
});

// Category Navigation Setup
function setupCategoryNavigation() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to category section
            const targetSection = document.getElementById(category);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup cart icon click to show cart page
function setupCartIconClick() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', showCart);
}

// Add item to cart
function addToCart(productId, productName, productPrice) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Item exists, increase quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // New item, add to cart
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    animateCartCount();
    
    // Show visual feedback
    showAddedToCartFeedback();
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart total
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);
    
    // Update cart items display
    updateCartItemsDisplay();
}

// Update cart items display
function updateCartItemsDisplay() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--medium-gray);">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                <p>Your cart is empty</p>
                <p>Add some delicious items to get started!</p>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const cartItemElement = createCartItemElement(item);
        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Create cart item element
function createCartItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
        </div>
        <div class="quantity-controls">
            <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
        </div>
        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background-color: #e74c3c; color: white; margin-left: 1rem;">
            <i class="fas fa-trash"></i>
        </button>
    `;
    return itemElement;
}

// Increase quantity
function increaseQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
        updateCartDisplay();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            // Remove item if quantity becomes 0
            cart.splice(itemIndex, 1);
        }
        updateCartDisplay();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
    }
}

// Show cart page
function showCart() {
    cartPage.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    updateCartItemsDisplay();
}

// Show menu (hide cart page)
function showMenu() {
    cartPage.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Animate cart count
function animateCartCount() {
    cartCountElement.style.animation = 'none';
    cartCountElement.offsetHeight; // Trigger reflow
    cartCountElement.style.animation = 'pulse 0.3s ease-in-out';
}

// Show visual feedback when item is added to cart
function showAddedToCartFeedback() {
    // Create and show a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--primary-blue);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 9999;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
        Added to cart!
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Smooth scroll behavior for category sections
function scrollToCategory(categoryId) {
    const section = document.getElementById(categoryId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update active category based on scroll position
function updateActiveCategoryOnScroll() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const sections = document.querySelectorAll('.category-section');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        // Update active button
        categoryButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-category') === currentSection) {
                button.classList.add('active');
            }
        });
    });
}

// Initialize scroll-based active category updates
document.addEventListener('DOMContentLoaded', function() {
    updateActiveCategoryOnScroll();
});

// Checkout functionality (placeholder)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // This is a placeholder for checkout functionality
    alert(`Thank you for your order! Total: $${cartTotal.toFixed(2)}\n\nThis is a demo - no actual payment will be processed.`);
    
    // Clear cart after "checkout"
    cart = [];
    updateCartDisplay();
    showMenu();
}

// Add checkout event listener
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !cartPage.classList.contains('hidden')) {
        showMenu();
    }
});

// Touch/swipe support for mobile cart dismissal
let touchStartY = 0;
let touchEndY = 0;

cartPage.addEventListener('touchstart', function(event) {
    touchStartY = event.changedTouches[0].screenY;
}, false);

cartPage.addEventListener('touchend', function(event) {
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    const minSwipeDistance = 100;
    
    if (swipeDistance > minSwipeDistance) {
        // Swipe down - close cart
        showMenu();
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handler
const debouncedScrollHandler = debounce(updateActiveCategoryOnScroll, 100);
window.addEventListener('scroll', debouncedScrollHandler);