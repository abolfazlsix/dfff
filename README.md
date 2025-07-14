# Digital Menu

A responsive digital menu application built with React and TypeScript, featuring a minimal blue and gray color palette. The application provides an interactive menu experience with category navigation, product cards, shopping cart functionality, and checkout process.

## Features

- **Responsive Design**: One column layout on mobile, two columns on tablets and laptops
- **Category Navigation**: Smooth scrolling to different menu sections (Breakfast, Appetizer, Barbecue, Tea)
- **Product Cards**: Display product name, description, price, image, and add to cart button
- **Shopping Cart**: Modal with item management (add, remove, update quantities)
- **Checkout Process**: Complete order form with customer information and order summary
- **Modern UI**: Clean, minimal design with blue and gray color scheme

## Layout Structure

- **Header**: Logo on the left, collection name in the center, shopping cart on the right
- **Category Navigation**: Below header with category buttons for easy navigation
- **Product Sections**: Each category displays its products in a responsive grid
- **Product Cards**: Name and description on the left, price on the right, image below, add button at bottom

## Technology Stack

- React 18
- TypeScript
- Vite (Build tool)
- CSS3 with CSS Variables for theming

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
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

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with logo, title, and cart
│   ├── CategoryNav.tsx # Category navigation buttons
│   ├── ProductCard.tsx # Individual product display
│   ├── CategorySection.tsx # Category sections with products
│   ├── CartModal.tsx   # Shopping cart modal
│   └── CheckoutPage.tsx # Checkout form and order summary
├── data/
│   └── menuData.ts     # Sample menu data
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Adding New Categories

1. Update the `categories` array in `src/data/menuData.ts`
2. Add corresponding products with the matching category ID

### Modifying Colors

The color scheme is defined using CSS variables in `src/index.css`. You can modify:
- `--primary-blue`: Main blue color
- `--secondary-blue`: Secondary blue color
- `--primary-gray`: Main gray color
- `--secondary-gray`: Secondary gray color

### Adding New Products

1. Add product objects to the `products` array in `src/data/menuData.ts`
2. Ensure the `category` field matches an existing category ID
3. Provide a valid image URL for the product

## Features in Detail

### Category Navigation
- Click on category buttons to smoothly scroll to the corresponding section
- Each category displays its icon and name
- Responsive design adapts to different screen sizes

### Product Cards
- Product name and description on the left
- Price prominently displayed on the right
- Product image below the header information
- "Add to Cart" button at the bottom
- Hover effects for better user interaction

### Shopping Cart
- Modal overlay with cart contents
- Quantity controls for each item
- Remove items functionality
- Total calculation
- Proceed to checkout button

### Checkout Process
- Customer information form
- Order summary with all items
- Total calculation
- Order placement confirmation

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.