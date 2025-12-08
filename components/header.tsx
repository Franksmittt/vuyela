'use client';

import { MobileHeader } from './mobile-header';
import { DesktopHeader } from './desktop-header';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/network', label: 'The Vuyela Network' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#1a1a1a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20" aria-label="Global">
        <MobileHeader navLinks={navLinks} />
        <DesktopHeader navLinks={navLinks} />
      </nav>
    </header>
  );
}
