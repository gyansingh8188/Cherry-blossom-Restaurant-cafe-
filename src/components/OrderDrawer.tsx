import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { OrderItem } from '../types';
import { calculateOrderTotal, formatINR } from '../utils/menu';
import { buildWhatsAppOrderUrl } from '../utils/reservation';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  if (!isOpen) return null;

  const { subtotal, itemCount, gstEstimate, grandTotal } = calculateOrderTotal(orderItems);

  const whatsAppUrl = buildWhatsAppOrderUrl(
    orderItems.map((o) => ({
      name: o.item.name,
      quantity: o.quantity,
      price: o.item.price,
    })),
    grandTotal,
    RESTAURANT_INFO.whatsappNumber
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292326]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFF9F4] h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#EAD5DC]">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#EAD5DC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#651F35] text-[#F3C7D2] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#292326]">Your Order Tray</h3>
              <p className="text-xs text-slate-500">
                {itemCount} {itemCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close order bag"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {orderItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#EAD5DC]/40 text-[#651F35] flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#292326] mb-1">
                Your order tray is empty
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Explore our menu to add artisanal starters, rich main courses, and specialty cafe beverages.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#651F35] text-white text-xs font-bold uppercase tracking-wider"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAD5DC]/60 text-xs text-slate-500">
                <span>Selected Dishes</span>
                <button
                  onClick={onClearOrder}
                  className="text-rose-600 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Clear Tray
                </button>
              </div>

              {orderItems.map((item) => (
                <div
                  key={item.item.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#EAD5DC] shadow-xs flex items-center justify-between gap-3"
                >
                  <img
                    src={item.item.image}
                    alt={item.item.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs text-[#292326] truncate">
                      {item.item.name}
                    </h5>
                    <span className="text-xs text-[#651F35] font-bold block mt-0.5">
                      {formatINR(item.item.price * item.quantity)}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {formatINR(item.item.price)} each
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-[#FFF9F4] rounded-lg border border-[#EAD5DC] p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.item.id, -1)}
                      aria-label="Decrease quantity"
                      className="p-1 rounded text-slate-600 hover:text-black hover:bg-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1 min-w-[16px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.item.id, 1)}
                      aria-label="Increase quantity"
                      className="p-1 rounded text-slate-600 hover:text-black hover:bg-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations and Checkout */}
        {orderItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-[#EAD5DC] space-y-4">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items):</span>
                <span className="font-medium text-[#292326]">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Restaurant GST (5%):</span>
                <span className="font-medium text-[#292326]">{formatINR(gstEstimate)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#651F35] pt-2 border-t border-[#EAD5DC]">
                <span>Estimated Grand Total:</span>
                <span>{formatINR(grandTotal)}</span>
              </div>
            </div>

            {/* Ordering Options */}
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Order to WhatsApp Staff
              </a>

              <a
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-[#C49A62] text-[#651F35] hover:bg-[#FFF9F4] font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                Order on Motina Online Portal ↗
              </a>
            </div>

            <p className="text-[10px] text-center text-slate-400">
              For dining at restaurant, you may also inform your server directly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
