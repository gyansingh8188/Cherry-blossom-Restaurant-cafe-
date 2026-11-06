import { DietaryType, MenuItem, OrderItem } from '../types';

export function filterMenuItems(
  items: MenuItem[],
  categoryId: string,
  searchQuery: string = '',
  dietaryFilter: DietaryType | 'all' = 'all'
): MenuItem[] {
  return items.filter((item) => {
    // Category match
    const categoryMatch =
      categoryId === 'all'
        ? true
        : categoryId === 'specials'
        ? item.isChefSpecial === true
        : item.category === categoryId;

    if (!categoryMatch) return false;

    // Dietary match
    if (dietaryFilter !== 'all' && item.dietary !== dietaryFilter) {
      return false;
    }

    // Search query match
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      const inName = item.name.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inIngredients = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));
      if (!inName && !inDesc && !inIngredients) {
        return false;
      }
    }

    return true;
  });
}

export function calculateOrderTotal(orderItems: OrderItem[]): {
  subtotal: number;
  itemCount: number;
  gstEstimate: number;
  grandTotal: number;
} {
  const subtotal = orderItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const itemCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);
  // 5% standard restaurant GST
  const gstEstimate = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gstEstimate;

  return {
    subtotal,
    itemCount,
    gstEstimate,
    grandTotal,
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
