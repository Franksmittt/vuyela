import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/network', label: 'The Vuyela Network' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/services/road-freight', label: 'Road Freight' },
    { href: '/services/global-trade', label: 'Global Trade Services' },
    { href: '/services/supply-chain', label: 'Supply Chain Outsourcing' },
    { href: '/services/project-cargo', label: 'Project Cargo' },
  ];

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-serif font-bold">
                  <span className="text-white">Vuyela</span>{' '}
                  <span className="text-yellow-400">Group</span>
                </span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Vuyela Group - Locally Invested, Globally Connected. Comprehensive logistics solutions through Vuyela Logistics, Vuyela Bulk, Vuyela Freight, and Vuyela Refuel.
              </p>
              {/* Compliance Badges */}
              <div className="space-y-2">
                <div className="text-xs text-white/60">
                  <span className="font-semibold text-white/80">B-BBEE Level 1</span>
                </div>
                <div className="text-xs text-white/60">
                  <span className="font-semibold text-white/80">Transnet Vendor</span>
                </div>
                <div className="text-xs text-white/60">
                  Reg: <span className="font-semibold text-white/80">K2019/377070/07</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a
                    href="mailto:info@vuyelalogistics.co.za"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    info@vuyelalogistics.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a
                    href="/quote"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Request a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Vuyela Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/compliance"
                className="text-white/60 hover:text-yellow-400 transition-colors duration-200"
              >
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

