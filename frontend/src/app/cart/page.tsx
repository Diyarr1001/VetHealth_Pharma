"use client";

import { useCart } from "@/store/CartContext";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-background pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center flex flex-col items-center">
          <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center text-muted-foreground mb-6">
            <ShoppingBag size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground font-heading mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md">Looks like you haven't added any veterinary products to your cart yet.</p>
          <Link href="/products" className="bg-primary hover:bg-premium text-primary-foreground px-8 py-3 rounded-xl font-bold transition-all shadow-sm">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground font-heading mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm divide-y divide-border">
              {items.map(item => (
                <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 bg-muted rounded-2xl overflow-hidden flex-shrink-0">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} fill className="object-cover" alt={item.name} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground"><ShoppingBag size={24}/></div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link href={`/products/${item.slug || item.id}`} className="text-xl font-bold font-heading text-foreground hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <div className="text-sm font-bold text-primary mt-1">${item.price.toFixed(2)}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive p-2 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-lg bg-background overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 font-bold text-foreground hover:bg-muted transition-colors">-</button>
                        <span className="px-3 text-sm font-bold border-x border-border">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 font-bold text-foreground hover:bg-muted transition-colors">+</button>
                      </div>
                      <div className="font-bold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={clearCart} className="text-sm font-bold text-muted-foreground hover:text-destructive transition-colors px-4">
              Empty Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-bold text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-sm text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-bold">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-8">
                <div className="flex justify-between items-center text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/contact?type=bulk" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-premium text-primary-foreground py-4 rounded-xl font-bold transition-all shadow-md">
                Proceed to Checkout <ArrowRight size={18} />
              </Link>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Payments and bulk orders are securely processed through our dedicated sales team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
