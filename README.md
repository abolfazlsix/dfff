# Digital Menu Application

A modern, responsive digital menu with a minimal blue and gray color palette.

## Features

### 🎨 Design
- **Minimal blue and gray color palette** for a clean, professional look
- **Responsive design**: 
  - Mobile: 1 column layout
  - Tablet/Laptop: 2 columns layout
  - Desktop: 3 columns layout

### 📱 Layout
- **Header**: Shopping cart (left) + Collection name (center) + Logo (right)
- **Categories**: Breakfast, Appetizer, Barbecue, Tea navigation buttons
- **Product Cards**: Name, description, price, image, and add button

### 🛒 Shopping Cart
- Click on shopping cart icon to view cart
- Add items with single click
- Quantity management (increase/decrease)
- Real-time total calculation
- Remove items functionality
- Visual notifications when items are added

### 🧭 Navigation
- Smooth scrolling to category sections
- Active category highlighting
- Keyboard support (ESC to close cart)
- Mobile swipe gestures

## How to Use

1. **Browse Menu**: Scroll through categories or click category buttons to jump to sections
2. **Add Items**: Click "Add to Cart" on any product
3. **Manage Cart**: Click the cart icon to view/edit your order
4. **Checkout**: Review your items and click checkout (demo functionality)

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Interactive functionality
- **Font Awesome**: Icons

## Getting Started

Simply open `index.html` in a web browser or serve it through a local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes