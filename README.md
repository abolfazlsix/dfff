# Digital Menu

A responsive digital menu application built with React and TypeScript, featuring a minimal blue and gray color palette.

## Features

- **Responsive Design**: One column layout on mobile, two columns on tablets and laptops
- **Category Navigation**: Smooth scrolling to different menu categories (Breakfast, Appetizer, Barbecue, Tea)
- **Shopping Cart**: Add items to cart with quantity management
- **Modern UI**: Clean, minimal design with blue and gray color scheme
- **Product Cards**: Beautiful product display with images, descriptions, and prices

## Layout Structure

- **Header**: Logo on the left, collection name in the center, shopping cart on the right
- **Category Navigation**: Below header with category buttons for smooth scrolling
- **Product Sections**: Each category displays its products in a responsive grid
- **Product Cards**: Name on the right, description below, price on the right, image below, add button at bottom

## Technology Stack

- React 18
- TypeScript
- Vite (Build tool)
- CSS3 with CSS Variables for theming

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with logo, title, and cart
│   ├── CategoryNav.tsx # Category navigation
│   ├── ProductCard.tsx # Individual product display
│   ├── CategorySection.tsx # Category sections with products
│   └── CartModal.tsx   # Shopping cart modal
├── data/               # Static data
│   └── menuData.ts     # Menu categories and products
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Features in Detail

### Responsive Design
- Mobile: Single column layout
- Tablet/Laptop: Two-column grid layout
- Desktop: Optimized spacing and layout

### Shopping Cart
- Add items with quantity tracking
- Update quantities in cart modal
- Remove items from cart
- Total price calculation
- Checkout functionality (placeholder)

### Category Navigation
- Smooth scrolling to category sections
- Active category highlighting
- Responsive button layout

### Product Management
- Product images from Unsplash
- Detailed product descriptions
- Price display
- Add to cart functionality

## Customization

### Colors
The application uses CSS variables for easy color customization. Main colors are defined in `src/index.css`:

- Primary Blue: `#3498db`
- Secondary Blue: `#2980b9`
- Primary Gray: `#7f8c8d`
- Secondary Gray: `#95a5a6`

### Adding Products
To add new products, edit `src/data/menuData.ts` and add new product objects to the products array.

### Adding Categories
To add new categories, edit `src/data/menuData.ts` and add new category objects to the categories array.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.