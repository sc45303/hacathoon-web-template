"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, ChevronDown, X, Menu } from 'lucide-react';
import { useState } from "react";

export function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full font-IntegralCF">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-black text-white py-2 px-4 relative">
          <div className="container mx-auto flex items-center justify-center text-sm">
            <p>
              Sign up and get 20% off to your first order.{" "}
              <Link href="/signup" className="underline hover:text-gray-200">
                Sign Up Now
              </Link>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 hover:text-gray-200"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
             {/* Mobile Hamburger Menu */}
             <button
              className="lg:hidden flex items-center justify-center p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className=" font-integral font-black text-3xl md:text-4xl px-4 py-2 flex">
              SHOP.CO
            </Link>

           

            {/* Navigation Links */}
            <div className={`lg:flex items-center space-x-8 mr-4 ${menuOpen ? 'flex' : 'hidden'} lg:block`}>    
              <div className="relative group font-integral">
                <Link href="/shop" className="flex items-center hover:text-gray-600 ">
                  Shop
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <Link href="/pages/onSale" className="hover:text-gray-600">
                On Sale
              </Link>
              <Link href="/pages/NEW-ARRIVALS" className="hover:text-gray-600">
                New Arrivals
              </Link>
              <Link href="/pages/brands" className="hover:text-gray-600">
                Brands
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl mr-4  lg:block">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-600" aria-label="Shopping cart">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="hover:text-gray-600" aria-label="User account">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-100 py-4 px-4">
          <div className="space-y-4">
            <Link href="/shop" className="block hover:text-gray-600">
              Shop
            </Link>
            <Link href="/pages/onSale" className="block hover:text-gray-600">
              On Sale
            </Link>
            <Link href="/pages/NEW-ARRIVALS" className="block hover:text-gray-600">
              New Arrivals
            </Link>
            <Link href="/pages/brands" className="block hover:text-gray-600">
              Brands
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
