import { MenuData } from '../types';

export const menuData: MenuData = {
  categories: [
    { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
    { id: 'appetizer', name: 'Appetizer', icon: '🥗' },
    { id: 'barbecue', name: 'Barbecue', icon: '🍖' },
    { id: 'tea', name: 'Tea', icon: '☕' },
  ],
  products: [
    // Breakfast items
    {
      id: '1',
      name: 'Eggs Benedict',
      description: 'Poached eggs on English muffin with hollandaise sauce',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
      category: 'breakfast'
    },
    {
      id: '2',
      name: 'Avocado Toast',
      description: 'Sourdough bread with smashed avocado and microgreens',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
      category: 'breakfast'
    },
    {
      id: '3',
      name: 'Pancakes',
      description: 'Fluffy buttermilk pancakes with maple syrup',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
      category: 'breakfast'
    },
    
    // Appetizer items
    {
      id: '4',
      name: 'Bruschetta',
      description: 'Toasted bread topped with tomatoes, garlic, and basil',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&h=300&fit=crop',
      category: 'appetizer'
    },
    {
      id: '5',
      name: 'Mozzarella Sticks',
      description: 'Crispy breaded mozzarella with marinara sauce',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      category: 'appetizer'
    },
    {
      id: '6',
      name: 'Spinach Artichoke Dip',
      description: 'Creamy dip with spinach, artichokes, and melted cheese',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
      category: 'appetizer'
    },
    
    // Barbecue items
    {
      id: '7',
      name: 'BBQ Ribs',
      description: 'Slow-cooked ribs with tangy barbecue sauce',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
      category: 'barbecue'
    },
    {
      id: '8',
      name: 'Grilled Chicken',
      description: 'Marinated chicken breast with herbs and spices',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
      category: 'barbecue'
    },
    {
      id: '9',
      name: 'Beef Brisket',
      description: 'Smoked beef brisket with homemade rub',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
      category: 'barbecue'
    },
    
    // Tea items
    {
      id: '10',
      name: 'Green Tea',
      description: 'Premium Japanese green tea with antioxidants',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1556682851c0336c5fd75b5b3?w=400&h=300&fit=crop',
      category: 'tea'
    },
    {
      id: '11',
      name: 'Earl Grey',
      description: 'Classic black tea with bergamot oil',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
      category: 'tea'
    },
    {
      id: '12',
      name: 'Chamomile Tea',
      description: 'Soothing herbal tea perfect for relaxation',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop',
      category: 'tea'
    }
  ]
};