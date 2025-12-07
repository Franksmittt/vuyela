'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/network', label: 'The Vuyela Network' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleToggle = () => {
    setIsMenuOpen(prev => {
      const newValue = !prev;
      return newValue;
    });
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  // Render menu portal - ALWAYS render when isMenuOpen is true and we're in browser
  const shouldRenderMenu = mounted && isMenuOpen && typeof window !== 'undefined' && document?.body;

  return (
    <>
      <header 
        style={{ 
          position: 'sticky',
          top: 0,
          zIndex: 9999,
          width: '100%',
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #374151'
        }}
        className="border-b border-gray-800 bg-[#1a1a1a] backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20" aria-label="Global">
          <div className="flex items-center lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                <span className="text-white">Vuyela</span>{' '}
                <span className="text-yellow-400">Group</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            onTouchEnd={handleToggle}
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors"
            style={{ 
              zIndex: 10000,
              position: 'relative',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
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

      {shouldRenderMenu && createPortal(
        <div
          id="mobile-menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2147483647,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'auto',
            isolation: 'isolate',
            display: 'block'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 2147483646,
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              pointerEvents: 'auto'
            }}
            onClick={handleClose}
            onTouchEnd={handleClose}
            aria-hidden="true"
          />
          
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '28rem',
              backgroundColor: '#1a1a1a',
              zIndex: 2147483647,
              overflowY: 'auto',
              boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <Link 
                  href="/" 
                  onClick={handleClose}
                  className="-m-1.5 p-1.5"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-xl font-serif font-bold tracking-tight">
                    <span className="text-white">Vuyela</span>{' '}
                    <span className="text-yellow-400">Group</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  onTouchEnd={handleClose}
                  className="-m-2.5 rounded-md p-2.5 text-white min-w-[44px] min-h-[44px] hover:bg-gray-800 transition-colors"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    pointerEvents: 'auto'
                  }}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    onTouchEnd={handleClose}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                    style={{ pointerEvents: 'auto' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link
                  href="/quote"
                  onClick={handleClose}
                  onTouchEnd={handleClose}
                  className="block w-full rounded-md bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm transition-colors hover:bg-yellow-300"
                  style={{ pointerEvents: 'auto' }}
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
