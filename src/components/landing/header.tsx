'use client';

import React from 'react';
import Link from 'next/link';
import { VenturaLogo } from '@/components/ui/ventura-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-blue-950/40">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Replicated Brand Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group transition-transform hover:scale-[1.02] cursor-pointer"
        >
          <VenturaLogo size="md" />
        </Link>

        {/* Right Desktop Nav Pill Buttons */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-6 py-1.5 text-sm font-bold tracking-wide transition-all duration-200 border border-blue-500/50 bg-black/70 text-white/90 shadow-[0_0_8px_rgba(37,99,235,0.2)] hover:bg-[#122B7A] hover:text-white hover:border-blue-400 hover:shadow-[0_0_14px_rgba(37,99,235,0.5)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-blue-500/50 bg-black/60 text-white hover:bg-blue-950/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-blue-900/50 text-white">
              <div className="flex flex-col gap-6 p-4">
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2"
                >
                  <VenturaLogo size="sm" />
                </Link>
                <nav className="flex flex-col gap-3 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-full px-5 py-2.5 text-center text-sm font-bold transition-all border border-blue-500/50 bg-black text-white hover:bg-[#122B7A]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
