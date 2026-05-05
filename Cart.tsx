import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Product } from "../data";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
              {itemCount > 0 && (
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-6xl mb-4">🍌</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Add some premium polished bananas to get started!
                </p>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-amber-600 font-bold text-sm mt-0.5">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onRemove(item.product.id)}
                          className="ml-auto p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                Checkout — ${total.toFixed(2)}
              </button>
              <p className="text-center text-xs text-gray-400">
                🔒 Secure checkout · Free shipping on all orders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
