'use client';

import Link from 'next/link';
import MobileNav from './mobile-nav';

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
    <header 
      className="sticky top-0 z-[9999] w-full border-b border-gray-800 bg-[#1a1a1a] backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20" aria-label="Global">
        {/* Mobile Navigation */}
        <MobileNav navLinks={navLinks} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              <span className="text-white">Vuyela</span>{' '}
              <span className="text-yellow-400">Group</span>
            </span>
          </Link>
        </div>

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
  );
}
