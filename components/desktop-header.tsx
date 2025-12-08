'use client';

import Link from 'next/link';

interface DesktopHeaderProps {
  navLinks: Array<{ href: string; label: string }>;
}

export function DesktopHeader({ navLinks }: DesktopHeaderProps) {
  return (
    <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-between w-full">
      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-serif font-bold">
        <span className="text-white">Vuyela</span>{' '}
        <span className="text-yellow-400">Group</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex lg:gap-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium leading-6 text-white hover:text-yellow-400 transition-colors py-2"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex lg:flex-1 lg:justify-end">
        <Link
          href="/quote"
          className="rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] hover:bg-yellow-300 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

