import React from 'react';
import Link from 'next/link';
import { VenturaLogo } from '@/components/ui/ventura-logo';
import { Mail, Phone, Instagram } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.06.105-1.023 3.744 3.815-1.004.106.067z" />
  </svg>
);

export function Footer() {
  const whatsappLink =
    'https://chat.whatsapp.com/Fb92FUUqIrPGrtTP5SVGyd?mode=gi_t';
  const instagramLink =
    'https://www.instagram.com/ventura.dypcoe?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';

  return (
    <footer className="relative w-full bg-[#020516] border-t border-blue-950/40 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col justify-start">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 mb-6 cursor-pointer"
            >
              <VenturaLogo size="md" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-normal">
              Hosted by DY Patil College of Engineering, Akurdi. Fostering the
              next generation of entrepreneurs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-black text-white font-headline mb-6 tracking-tight">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#about"
                className="border-b border-gray-700/60 pb-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#timeline"
                className="border-b border-gray-700/60 pb-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                Timeline
              </Link>
              <Link
                href="#contact"
                className="border-b border-gray-700/60 pb-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-black text-white font-headline mb-6 tracking-tight">
              Contact Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
              DY Patil College of Engineering, Akurdi, Pune, Maharashtra 411044
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a
                href="mailto:contact@edcdypcoe.in"
                className="hover:text-blue-300 transition-colors"
              >
                contact@edcdypcoe.in
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <div>
                  <div className="font-semibold text-white">Atharv Pawar</div>
                  <div className="text-gray-300">+91 94046 97077</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Bhagyashree Chaudhary</div>
                  <div className="text-gray-300">+91 99675 85794</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Shravani Nikrad</div>
                  <div className="text-gray-300">+91 91753 45939</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Join Our Community */}
          <div className="bg-[#040C29] p-7 rounded-xl border border-blue-950/60 flex flex-col justify-between items-center sm:items-start text-center sm:text-left shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div>
              <h3 className="text-2xl font-black text-white font-headline mb-3 tracking-tight">
                Join Our Community
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                Get the latest updates and connect with us on WhatsApp.
              </p>
            </div>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#FF4D26] hover:bg-[#e03c15] text-white font-black py-3 text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,77,38,0.45)] transition-all duration-200 text-center block"
            >
              JOIN WHATSAPP GROUP
            </Link>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="border-t border-blue-950/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ventura DYP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-950/40 text-gray-300 hover:text-green-400 hover:bg-blue-900/60 transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </Link>
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-950/40 text-gray-300 hover:text-pink-400 hover:bg-blue-900/60 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
