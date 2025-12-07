'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/network', label: 'The Vuyela Network' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[9999] w-full border-b border-gray-800 bg-[#1a1a1a] backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                <span className="text-white">Vuyela</span>{' '}
                <span className="text-yellow-400">Group</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors relative z-[10001]"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium leading-6 text-white transition-colors hover:text-yellow-400 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/quote"
              className="rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] shadow-sm transition-all hover:bg-yellow-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu - rendered via portal */}
      {mounted && isMenuOpen && createPortal(
        <div 
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-[99999]"
          style={{ zIndex: 99999 }}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleMenuClose}
            aria-hidden="true"
          />
          
          {/* Mobile menu panel */}
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-[#1a1a1a] shadow-2xl transform transition-transform"
            role="dialog" 
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="px-6 py-6">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="-m-1.5 p-1.5" onClick={handleMenuClose}>
                  <span className="text-xl font-serif font-bold tracking-tight">
                    <span className="text-white">Vuyela</span>{' '}
                    <span className="text-yellow-400">Group</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors"
                  onClick={handleMenuClose}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Navigation links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                    onClick={handleMenuClose}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link
                  href="/quote"
                  className="block w-full rounded-md bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm transition-colors hover:bg-yellow-300"
                  onClick={handleMenuClose}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
