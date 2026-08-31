'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#contact", label: "Contact Us" },
  ]
  const registerLink = "https://unstop.com/p/dyp-ventura-2025-entrepreneurship-development-cell-dypcoe-1542359";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logo.png" alt="Ventura Logo" width={120} height={28} style={{ width: '120px', height: 'auto' }} className="dark:invert" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex" asChild>
            <Link href={registerLink} target="_blank">Register Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                   <Image src="/logo.png" alt="Ventura Logo" width={120} height={28} style={{ width: '120px', height: 'auto' }} className="dark:invert" />
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-secondary"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button className="w-full" asChild>
                  <Link href={registerLink} target="_blank">Register Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
