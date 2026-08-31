import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram } from "lucide-react"

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
  return (
    <footer className="w-full border-t border-border/40 bg-black">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/logo.png" alt="Ventura Logo" width={180} height={40} style={{ height: 'auto' }} className="dark:invert"/>
          </Link>
          <p className="text-muted-foreground">
            Hosted by DY Patil College of Engineering, Akurdi. Fostering the next generation of entrepreneurs.
          </p>
        </div>
        <div className="grid gap-4 text-sm">
          <h3 className="font-semibold font-headline">Quick Links</h3>
          <Link href="#about" className="hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#timeline" className="hover:text-primary transition-colors" prefetch={false}>
            Timeline
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-4 text-sm">
          <h3 className="font-semibold font-headline">Contact Us</h3>
          <p className="text-muted-foreground">
            DY Patil College of Engineering, Akurdi, Pune, Maharashtra 411044
          </p>
          
          <p className="text-muted-foreground">
  Email:{" "}
  <a
    href="mailto:contact@edcdypcoe.in"
    className="text-primary hover:underline"
  >
    contact@edcdypcoe.in
  </a>
</p>
          <p className="text-muted-foreground">Phone: +91 8329358967, +91 9307924743, +91 9307154076</p>
        </div>
        <div className="grid gap-4">
          <h3 className="font-semibold font-headline">Join our Community</h3>
          <p className="text-sm text-muted-foreground">Get the latest updates and connect with us on WhatsApp.</p>
          <Button asChild>
            <Link href="https://chat.whatsapp.com/H9Lvw7bl7TB4mRjbNhU1G4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <WhatsAppIcon className="h-5 w-5" />
              Join WhatsApp Group
            </Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ventura Launchpad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/edc-dypcoe/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/ventura.dypcoe?igsh=MTRwZXU1dnVpMXpoYw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
