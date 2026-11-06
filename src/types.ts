export type DietaryType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'main-course' | 'snacks' | 'beverages' | 'desserts' | 'specials';
  categoryLabel: string;
  price: number; // in INR
  dietary: DietaryType;
  description: string;
  image: string;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  prepTime?: string;
  ingredients?: string[];
  spiciness?: 'mild' | 'medium' | 'spicy';
}

export interface MenuCategory {
  id: string;
  label: string;
  iconName?: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationRequest {
  fullName: string;
  phone: string;
  email?: string;
  guests: number;
  date: string;
  time: string;
  seatingPreference: 'main-dining' | 'cafe-corner' | 'family-lounge' | 'celebration';
  specialRequests?: string;
}

export interface ReservationRecord extends ReservationRequest {
  id: string;
  createdAt: string;
  status: 'pending-confirmation' | 'confirmed';
}

export interface ReviewItem {
  id: string;
  author: string;
  authorLocation: string;
  rating: number;
  date: string;
  comment: string;
  occasion: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'food' | 'cafe' | 'celebrations';
  imageUrl: string;
  caption: string;
}
