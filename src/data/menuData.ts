import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
  { id: 'appetizer', name: 'Appetizer', icon: '🥗' },
  { id: 'barbecue', name: 'Barbecue', icon: '🍖' },
  { id: 'tea', name: 'Tea', icon: '☕' },
];

export const products: Product[] = [
  // Breakfast items
  {
    id: 'b1',
    name: 'Classic Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    category: 'breakfast'
  },
  {
    id: 'b2',
    name: 'Eggs Benedict',
    description: 'Poached eggs on English muffin with hollandaise sauce',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    category: 'breakfast'
  },
  {
    id: 'b3',
    name: 'Avocado Toast',
    description: 'Sourdough toast with smashed avocado and microgreens',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    category: 'breakfast'
  },

  // Appetizer items
  {
    id: 'a1',
    name: 'Bruschetta',
    description: 'Toasted bread topped with tomatoes, garlic, and basil',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&h=300&fit=crop',
    category: 'appetizer'
  },
  {
    id: 'a2',
    name: 'Mozzarella Sticks',
    description: 'Crispy breaded mozzarella served with marinara sauce',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'appetizer'
  },
  {
    id: 'a3',
    name: 'Spinach Artichoke Dip',
    description: 'Creamy dip with spinach, artichokes, and melted cheese',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
    category: 'appetizer'
  },

  // Barbecue items
  {
    id: 'bb1',
    name: 'BBQ Ribs',
    description: 'Slow-cooked ribs with our signature barbecue sauce',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    category: 'barbecue'
  },
  {
    id: 'bb2',
    name: 'Smoked Brisket',
    description: 'Tender smoked brisket with homemade rub',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
    category: 'barbecue'
  },
  {
    id: 'bb3',
    name: 'BBQ Chicken',
    description: 'Grilled chicken with barbecue glaze',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
    category: 'barbecue'
  },

  // Tea items
  {
    id: 't1',
    name: 'Earl Grey Tea',
    description: 'Classic black tea with bergamot oil',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    category: 'tea'
  },
  {
    id: 't2',
    name: 'Green Tea',
    description: 'Refreshing Japanese green tea',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    category: 'tea'
  },
  {
    id: 't3',
    name: 'Chai Latte',
    description: 'Spiced tea with steamed milk and honey',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    category: 'tea'
  },
];