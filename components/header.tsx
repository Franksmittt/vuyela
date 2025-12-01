'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/network', label: 'The Vuyela Network' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#1a1a1a] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              <span className="text-white">Vuyela</span>{' '}
              <span className="text-yellow-400">Logistics</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white min-w-[44px] min-h-[44px]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

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

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/50 lg:hidden" 
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          
          {/* Mobile menu panel */}
          <div 
            className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm overflow-y-auto bg-[#1a1a1a] px-6 py-6 lg:hidden" 
            role="dialog" 
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={toggleMenu}>
                <span className="text-xl font-serif font-bold tracking-tight">
                  <span className="text-white">Vuyela</span>{' '}
                  <span className="text-yellow-400">Logistics</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors"
                onClick={toggleMenu}
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
                  onClick={toggleMenu}
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
                onClick={toggleMenu}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

