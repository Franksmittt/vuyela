'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  navLinks: Array<{ href: string; label: string }>;
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header - Logo and Hamburger */}
      <div className="flex lg:hidden items-center justify-between w-full">
        <Link 
          href="/" 
          className="-m-1.5 p-1.5 transition-opacity hover:opacity-80 flex-shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-xl font-serif font-bold tracking-tight">
            <span className="text-white">Vuyela</span>{' '}
            <span className="text-yellow-400">Group</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggle();
          }}
          className="inline-flex items-center justify-center rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] z-50 relative"
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
      </div>

      {/* Mobile Menu Overlay - Only render when mounted and menu is open */}
      {mounted && isMenuOpen && typeof window !== 'undefined' && document?.body && createPortal(
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99999] lg:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#1a1a1a] shadow-2xl overflow-y-auto z-50"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="p-6">
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between mb-8">
                <Link 
                  href="/" 
                  onClick={handleClose}
                  className="-m-1.5 p-1.5"
                >
                  <span className="text-xl font-serif font-bold tracking-tight">
                    <span className="text-white">Vuyela</span>{' '}
                    <span className="text-yellow-400">Group</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link
                  href="/quote"
                  onClick={handleClose}
                  className="block w-full rounded-md bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
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

