'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileHeaderProps {
  navLinks: Array<{ href: string; label: string }>;
}

export function MobileHeader({ navLinks }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <div className="flex lg:hidden items-center justify-between w-full">
        <Link href="/" className="text-xl font-serif font-bold">
          <span className="text-white">Vuyela</span>{' '}
          <span className="text-yellow-400">Group</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white hover:bg-gray-800 rounded-md"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-[#1a1a1a] shadow-xl overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold">
                  <span className="text-white">Vuyela</span>{' '}
                  <span className="text-yellow-400">Group</span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:bg-gray-800 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-yellow-400 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link
                  href="/quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-md bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-[#1a1a1a] hover:bg-yellow-300 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

