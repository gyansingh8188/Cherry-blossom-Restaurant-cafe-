import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, Sparkles, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  orderItemCount: number;
  onOpenOrderDrawer: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  orderItemCount,
  onOpenOrderDrawer,
  petalsEnabled,
  onTogglePetals,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Specials', href: '#specials' },
    { label: 'Ambience', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF9F4]/95 backdrop-blur-md shadow-sm border-b border-[#EAD5DC]'
            : 'bg-[#FFF9F4]/80 backdrop-blur-xs border-b border-[#EAD5DC]/50'
        }`}
      >
        {/* Subtle Top Info Bar */}
        <div className="hidden lg:block bg-[#651F35] text-[#FFF9F4] text-xs py-1.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F3C7D2]" />
                1st Floor, Jasraj Kripa Building, Barauli, Robertsganj
              </span>
              <span className="text-[#F3C7D2]/60">·</span>
              <span>Open Daily: 10:30 AM – 10:30 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-[#F3C7D2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3C7D2]" />
                {RESTAURANT_INFO.phone}
              </a>
              <span className="text-[#F3C7D2]/60">·</span>
              <a
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3C7D2] hover:underline font-medium"
              >
                Direct Online Ordering (Motina) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-hidden"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            {/* Cherry Blossom Brand Icon */}
            <div className="w-11 h-11 rounded-full bg-[#651F35] flex items-center justify-center text-[#F3C7D2] shadow-xs group-hover:scale-105 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-[1.75]">
                {/* 5-petaled stylized blossom */}
                <circle cx="12" cy="12" r="2.5" fill="#F3C7D2" />
                <path d="M12 9.5C12 6.5 10 5 12 2C14 5 12 6.5 12 9.5Z" fill="#F3C7D2" fillOpacity="0.85" />
                <path d="M14.5 12C17.5 12 19 10 22 12C19 14 17.5 12 14.5 12Z" fill="#F3C7D2" fillOpacity="0.85" />
                <path d="M12 14.5C12 17.5 14 19 12 22C10 19 12 17.5 12 14.5Z" fill="#F3C7D2" fillOpacity="0.85" />
                <path d="M9.5 12C6.5 12 5 14 2 12C5 10 6.5 12 9.5 12Z" fill="#F3C7D2" fillOpacity="0.85" />
                <path d="M13.7 10.3C15.8 8.2 17.5 8.5 19 7C17.5 8.5 15.8 10.2 13.7 10.3Z" fill="#F3C7D2" />
              </svg>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#651F35] leading-tight">
                Cherry Blossom
              </span>
              <span className="block text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#C49A62]">
                Restaurant &amp; Cafe
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#292326] hover:text-[#651F35] relative py-1 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#651F35] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Ambient Petals Toggle */}
            <button
              onClick={onTogglePetals}
              aria-label={petalsEnabled ? 'Disable floating petals' : 'Enable floating petals'}
              title={petalsEnabled ? 'Petal effect active' : 'Petal effect paused'}
              className={`p-2 rounded-lg border transition-colors ${
                petalsEnabled
                  ? 'border-[#F3C7D2] bg-[#F3C7D2]/20 text-[#651F35]'
                  : 'border-slate-200 bg-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Order Bag Button */}
            <button
              onClick={onOpenOrderDrawer}
              aria-label="View Order Bag"
              className="relative p-2.5 rounded-lg border border-[#EAD5DC] bg-white text-[#651F35] hover:bg-[#F3C7D2]/20 transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-semibold">Bag</span>
              {orderItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#651F35] text-white text-[11px] font-bold flex items-center justify-center">
                  {orderItemCount}
                </span>
              )}
            </button>

            {/* Book a Table Primary CTA */}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#reservation');
              }}
              className="px-5 py-2.5 rounded-lg bg-[#651F35] text-[#FFF9F4] text-xs uppercase tracking-wider font-semibold shadow-xs hover:bg-[#4E1729] active:scale-95 transition-all duration-200"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenOrderDrawer}
              aria-label="View Order Bag"
              className="relative p-2 rounded-lg border border-[#EAD5DC] bg-white text-[#651F35]"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#651F35] text-white text-[10px] font-bold flex items-center justify-center">
                  {orderItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 rounded-lg border border-[#EAD5DC] text-[#651F35] hover:bg-[#F3C7D2]/20"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#292326]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-[#FFF9F4] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 border-l border-[#EAD5DC]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAD5DC]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#651F35] flex items-center justify-center text-[#F3C7D2]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2">
                      <circle cx="12" cy="12" r="3" fill="#F3C7D2" />
                      <path d="M12 9C12 6 10 4 12 2C14 4 12 6 12 9Z" fill="#F3C7D2" />
                      <path d="M15 12C18 12 20 10 22 12C20 14 18 12 15 12Z" fill="#F3C7D2" />
                      <path d="M12 15C12 18 14 20 12 22C10 20 12 18 12 15Z" fill="#F3C7D2" />
                      <path d="M9 12C6 12 4 14 2 12C4 10 6 12 9 12Z" fill="#F3C7D2" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-lg text-[#651F35]">Cherry Blossom</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-3 py-3 rounded-lg text-base font-medium text-[#292326] hover:bg-[#F3C7D2]/25 hover:text-[#651F35] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EAD5DC] flex flex-col gap-3">
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#reservation');
                }}
                className="w-full text-center py-3 rounded-lg bg-[#651F35] text-[#FFF9F4] font-semibold text-sm tracking-wide shadow-sm"
              >
                Book a Table
              </a>
              <a
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-lg border border-[#C49A62] text-[#651F35] font-semibold text-sm bg-white"
              >
                Order Online (Motina) ↗
              </a>
              <div className="pt-2 text-center text-xs text-slate-500">
                Robertsganj, Sonbhadra · UP
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
