import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ChefsSpecials } from './components/ChefsSpecials';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { CherryPetals } from './components/CherryPetals';
import { MenuItem, OrderItem } from './types';

export default function App() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  // Cart / Order Bag Handlers
  const handleAddToBag = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F4] text-[#292326] relative">
      {/* Floating Cherry Blossom Petals Overlay */}
      <CherryPetals enabled={petalsEnabled} />

      {/* Navigation */}
      <Navbar
        orderItemCount={totalItemCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onReserveTable={() => scrollToSection('reservation')}
        />

        {/* About Section */}
        <AboutSection />

        {/* Chef's Specials */}
        <ChefsSpecials
          onSelectItem={(item) => setSelectedDishForModal(item)}
          onAddToBag={handleAddToBag}
        />

        {/* Interactive Menu Section */}
        <MenuSection
          onSelectItem={(item) => setSelectedDishForModal(item)}
          onAddToBag={handleAddToBag}
        />

        {/* Ambience & Gallery */}
        <GallerySection />

        {/* Customer Reviews & Google Maps Badge */}
        <ReviewsSection />

        {/* Table Reservation Experience */}
        <ReservationSection />

        {/* Location & Contact */}
        <LocationContact />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Slide-over Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onAddToBag={handleAddToBag}
      />
    </div>
  );
}
