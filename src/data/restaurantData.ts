import { GalleryItem, MenuCategory, MenuItem, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Cherry Blossom Restaurant & Cafe',
  tagline: 'Where Every Bite Blooms with Happiness.',
  altTagline: 'An Elegant Taste. A Beautiful Experience.',
  description:
    'Experience the premier dining and cafe destination in Robertsganj. We bring together artisanal cafe drinks, delectable multi-cuisine dishes, and a serene, warm atmosphere inspired by the gentle elegance of cherry blossoms.',
  address: {
    line1: '1st Floor, Jasraj Kripa Building',
    landmark: 'Near Nagar Sarkari Bank, Barauli',
    city: 'Robertsganj',
    district: 'Sonbhadra',
    state: 'Uttar Pradesh',
    pincode: '231216',
    country: 'India',
  },
  formattedAddress:
    '1st Floor, Jasraj Kripa Building, Near Nagar Sarkari Bank, Barauli, Robertsganj, Sonbhadra, Uttar Pradesh 231216, India',
  phone: '+91 80099 22000',
  whatsappNumber: '918009922000',
  email: 'hello@cherryblossomcafe.in',
  openingHours: 'Monday – Sunday: 10:30 AM – 10:30 PM',
  googleMapsUrl: 'https://maps.app.goo.gl/Gz56B75XnXY26HBt5',
  onlineOrderUrl:
    'https://order.motina.in/cherry-blossom-restaurant-cafe/product/Cherry062',
  averageRating: 4.8,
  totalReviews: 240,
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'Full Menu' },
  { id: 'starters', label: 'Starters' },
  { id: 'main-course', label: 'Main Course' },
  { id: 'snacks', label: 'Snacks & Cafe' },
  { id: 'beverages', label: 'Beverages & Coffee' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'specials', label: "Chef's Specials" },
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-1',
    name: 'Paneer Tikka Royale',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 249,
    dietary: 'veg',
    description:
      'Cottage cheese cubes marinated in aromatic tandoori spices, char-grilled to golden perfection with crisp bell peppers.',
    image:
      'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '15-20 min',
    spiciness: 'medium',
    ingredients: ['Fresh Paneer', 'Tandoori Masala', 'Yogurt', 'Bell Peppers', 'Mint Chutney'],
  },
  {
    id: 'starter-2',
    name: 'Crispy Sweet Corn Chaat',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 189,
    dietary: 'veg',
    description:
      'Golden sweet corn tossed with crunchy peppers, fresh lime zest, and tangy house seasoning.',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    prepTime: '10-12 min',
    spiciness: 'mild',
    ingredients: ['Sweet Corn', 'Spring Onions', 'Chaat Herbs', 'Lemon Juice'],
  },
  {
    id: 'starter-3',
    name: 'Hara Bhara Kebab',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 219,
    dietary: 'veg',
    description:
      'Nutritious patties crafted with garden-fresh spinach, green peas, and mild spices, pan-seared with a crisp crust.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    prepTime: '15 min',
    spiciness: 'mild',
    ingredients: ['Spinach', 'Green Peas', 'Potatoes', 'Aromatic Herbs'],
  },
  {
    id: 'starter-4',
    name: 'Tandoori Murgh Tikka',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 289,
    dietary: 'non-veg',
    description:
      'Succulent chicken chunks marinated in hung curd and roasted Kashmiri spices, clay-oven roasted to tender bliss.',
    image:
      'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '20 min',
    spiciness: 'spicy',
    ingredients: ['Chicken Breast', 'Kashmiri Red Chilli', 'Ginger Garlic', 'Charcoal Smoke'],
  },

  // MAIN COURSE
  {
    id: 'main-1',
    name: 'Dal Makhani Cherry Blossom',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 279,
    dietary: 'veg',
    description:
      'Slow-cooked black lentils simmered overnight with farm churned white butter, tomatoes, and rich cream.',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    isChefSpecial: true,
    prepTime: '15 min',
    spiciness: 'mild',
    ingredients: ['Whole Urad Dal', 'Cultured Cream', 'Vine Tomatoes', 'Kasoori Methi'],
  },
  {
    id: 'main-2',
    name: 'Paneer Butter Masala',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 299,
    dietary: 'veg',
    description:
      'Velvety makhani gravy enriched with cashews and gentle whole spices, folded with soft paneer cubes.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    prepTime: '15 min',
    spiciness: 'medium',
    ingredients: ['Paneer', 'Cashew Paste', 'Tomato Puree', 'Cardamom', 'Butter'],
  },
  {
    id: 'main-3',
    name: 'Dum Pukht Handi Biryani',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 329,
    dietary: 'veg',
    description:
      'Fragrant long-grain basmati rice layered with seasonal vegetables, caramelized onions, and saffron sealed in a clay pot.',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '20-25 min',
    spiciness: 'medium',
    ingredients: ['Basmati Rice', 'Saffron', 'Veggies', 'Ghee', 'Biryani Spices'],
  },
  {
    id: 'main-4',
    name: 'Butter Chicken Royale',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 359,
    dietary: 'non-veg',
    description:
      'Tender shredded tandoori chicken simmered in a luscious silk-smooth tomato, honey, and cashew gravy.',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '20 min',
    spiciness: 'mild',
    ingredients: ['Tandoori Chicken', 'Fresh Cream', 'Tomato Concasse', 'Butter', 'Fenugreek'],
  },
  {
    id: 'main-5',
    name: 'Garlic Butter Naan',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 69,
    dietary: 'veg',
    description:
      'Leavened clay-oven flatbread brushed generously with roasted garlic butter and fresh coriander.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    prepTime: '5-8 min',
    spiciness: 'mild',
    ingredients: ['Wheat Flour', 'Garlic', 'Butter', 'Cilantro'],
  },

  // SNACKS & CAFE
  {
    id: 'snack-1',
    name: 'Cherry Blossom Loaded Burger',
    category: 'snacks',
    categoryLabel: 'Snacks & Cafe',
    price: 189,
    dietary: 'veg',
    description:
      'Artisan brioche bun with a crispy herb patty, molten cheddar cheese, pickled gherkins, and smoked cafe relish.',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '12-15 min',
    spiciness: 'mild',
    ingredients: ['Brioche Bun', 'Veggie Patty', 'Cheddar Cheese', 'Crisp Lettuce', 'House Sauce'],
  },
  {
    id: 'snack-2',
    name: 'Farmhouse Gourmet Pizza (10")',
    category: 'snacks',
    categoryLabel: 'Snacks & Cafe',
    price: 299,
    dietary: 'veg',
    description:
      'Hand-stretched thin crust topped with San Marzano style sauce, 100% mozzarella, sweet corn, mushrooms, and bell peppers.',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '15-18 min',
    spiciness: 'mild',
    ingredients: ['Mozzarella', 'Bell Peppers', 'Mushrooms', 'Sweet Corn', 'Oregano'],
  },
  {
    id: 'snack-3',
    name: 'Creamy White Sauce Penne Pasta',
    category: 'snacks',
    categoryLabel: 'Snacks & Cafe',
    price: 239,
    dietary: 'veg',
    description:
      'Penne tossed in an authentic Italian Alfredo style parmesan cream reduction with broccoli florets and garlic toast.',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
    prepTime: '15 min',
    spiciness: 'mild',
    ingredients: ['Durum Wheat Penne', 'Parmesan', 'Garlic', 'Broccoli', 'Herb Butter'],
  },
  {
    id: 'snack-4',
    name: 'Veg Hakka Noodles & Manchurian Combo',
    category: 'snacks',
    categoryLabel: 'Snacks & Cafe',
    price: 249,
    dietary: 'veg',
    description:
      'Wok-tossed noodles with crunchy julienned vegetables served alongside crispy vegetable balls in spicy garlic soy gravy.',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '15 min',
    spiciness: 'medium',
    ingredients: ['Eggless Noodles', 'Manchurian Balls', 'Soy Sauce', 'Spring Onion', 'Garlic'],
  },

  // BEVERAGES
  {
    id: 'bev-1',
    name: 'Rose Blossom Iced Latte',
    category: 'beverages',
    categoryLabel: 'Beverages & Coffee',
    price: 169,
    dietary: 'veg',
    description:
      'Our signature cafe creation: cold brewed espresso infused with organic Damascus rose cordial and silky chilled milk.',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
    isChefSpecial: true,
    isPopular: true,
    prepTime: '5-7 min',
    spiciness: 'mild',
    ingredients: ['Espresso', 'Rose Cordial', 'Velvet Milk', 'Edible Petals'],
  },
  {
    id: 'bev-2',
    name: 'Hazelnut Crunch Cold Coffee',
    category: 'beverages',
    categoryLabel: 'Beverages & Coffee',
    price: 159,
    dietary: 'veg',
    description:
      'Thick blended arabica coffee with toasted hazelnut syrup, vanilla ice cream, and chocolate curls.',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '5 min',
    ingredients: ['Arabica Espresso', 'Hazelnut', 'Vanilla Ice Cream', 'Dark Chocolate'],
  },
  {
    id: 'bev-3',
    name: 'Fresh Mint & Lime Mojito',
    category: 'beverages',
    categoryLabel: 'Beverages & Coffee',
    price: 139,
    dietary: 'veg',
    description:
      'Muddled garden mint leaves, fresh lime wedges, sparkling water, and crushed ice for the ultimate refreshing cooler.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 min',
    ingredients: ['Fresh Mint', 'Key Lime', 'Sparkling Water', 'Cane Sugar'],
  },
  {
    id: 'bev-4',
    name: 'Belgian Dark Hot Chocolate',
    category: 'beverages',
    categoryLabel: 'Beverages & Coffee',
    price: 179,
    dietary: 'veg',
    description:
      'Steamed whole milk poured over rich 54% dark Belgian chocolate buttons, crowned with toasted marshmallows.',
    image:
      'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80',
    prepTime: '7 min',
    ingredients: ['Belgian Chocolate', 'Steamed Milk', 'Cinnamon Dust', 'Marshmallows'],
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Sizzling Chocolate Brownie',
    category: 'desserts',
    categoryLabel: 'Desserts',
    price: 199,
    dietary: 'veg',
    description:
      'Warm fudgy walnut brownie served on a sizzling cast-iron platter, topped with vanilla bean gelato and bubbling hot fudge.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    prepTime: '8-10 min',
    ingredients: ['Fudge Brownie', 'Vanilla Bean Gelato', 'Hot Fudge', 'Roasted Walnuts'],
  },
  {
    id: 'dessert-2',
    name: 'New York Baked Cheesecake',
    category: 'desserts',
    categoryLabel: 'Desserts',
    price: 219,
    dietary: 'veg',
    description:
      'Dense and silky Philadelphia-style cheesecake with a crunchy graham cracker crust and wild berry compote drizzle.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 min',
    ingredients: ['Cream Cheese', 'Graham Crust', 'Berry Coulis'],
  },

  // SPECIALS
  {
    id: 'special-1',
    name: 'Cherry Blossom Royal Sizzler',
    category: 'specials',
    categoryLabel: "Chef's Specials",
    price: 389,
    dietary: 'veg',
    description:
      'Signature sizzling platter with garlic herb rice, grilled paneer steak, buttered veggies, French fries, and smoky pepper sauce.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    isChefSpecial: true,
    isPopular: true,
    prepTime: '20 min',
    spiciness: 'medium',
    ingredients: ['Paneer Steak', 'Herb Rice', 'Sautéed Greens', 'Smoked Pepper Jus', 'Crisp Fries'],
  },
  {
    id: 'special-2',
    name: 'The Cherry Blossom Grand Platter',
    category: 'specials',
    categoryLabel: "Chef's Specials",
    price: 499,
    dietary: 'veg',
    description:
      'An opulent assortment of Paneer Tikka, Hara Bhara Kebab, Crispy Corn, Spring Rolls, Tandoori Mushrooms, and special dips.',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    isChefSpecial: true,
    prepTime: '22 min',
    spiciness: 'medium',
    ingredients: ['Paneer Tikka', 'Tandoori Mushroom', 'Spring Rolls', 'Mint Dips', 'Pickled Onions'],
  },
];

export const CHEFS_SPECIAL_HIGHLIGHTS = MENU_ITEMS.filter((item) => item.isChefSpecial);

export const AMBIENCE_GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Intimate Dining Hall',
    category: 'interior',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    caption: 'Warm ambient lighting, comfortable booth seating, and refined modern aesthetics.',
  },
  {
    id: 'g-2',
    title: 'Cozy Cafe Nook',
    category: 'cafe',
    imageUrl:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
    caption: 'The ideal corner for quiet conversations, specialty coffee, and relaxation.',
  },
  {
    id: 'g-3',
    title: 'Artisanal Beverage Bar',
    category: 'food',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    caption: 'Freshly ground barista brews, chilled frappes, and handcrafted mocktails.',
  },
  {
    id: 'g-4',
    title: 'Culinary Plating & Presentation',
    category: 'food',
    imageUrl:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    caption: 'Every recipe is prepared with passion and served with artistic precision.',
  },
  {
    id: 'g-5',
    title: 'Celebrations & Family Gatherings',
    category: 'celebrations',
    imageUrl:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    caption: 'Creating heartfelt memories for birthdays, anniversaries, and reunions.',
  },
  {
    id: 'g-6',
    title: 'Evening Atmosphere',
    category: 'interior',
    imageUrl:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
    caption: 'Gentle melodies, soft lighting, and an unforgettable evening dining mood.',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Amitabh Mishra',
    authorLocation: 'Robertsganj Local',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Finally a truly premium restaurant & cafe in Robertsganj! The Dal Makhani and Sizzler were sensational, and the ambience on the 1st floor is calm and elegant. Perfect for family dinners.',
    occasion: 'Family Dinner',
  },
  {
    id: 'rev-2',
    author: 'Priya Srivastava',
    authorLocation: 'Sonbhadra',
    rating: 5,
    date: '1 month ago',
    comment:
      'Celebrated my sister’s birthday here. The staff was super courteous, the Rose Latte and Sizzling Brownie were top notch, and the photos turned out stunning. Highly recommended!',
    occasion: 'Birthday Celebration',
  },
  {
    id: 'rev-3',
    author: 'Rajesh K. Verma',
    authorLocation: 'Robertsganj',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Conveniently located near Nagar Sarkari Bank in Barauli. Very clean, fast service, delicious Paneer Butter Masala and crispy starters. A great upgrade for our town.',
    occasion: 'Casual Dining',
  },
  {
    id: 'rev-4',
    author: 'Shalini Gupta',
    authorLocation: 'Varanasi / Visitor',
    rating: 4.8,
    date: '1 month ago',
    comment:
      'Stopped by while traveling through Sonbhadra. Wonderful coffee, great mocktails, and polite hospitality. Feels like an upscale cafe in a metro city.',
    occasion: 'Cafe & Refreshments',
  },
];
