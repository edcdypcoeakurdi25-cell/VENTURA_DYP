import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import { eventSchema, organizationSchema, breadcrumbSchema } from '@/lib/structured-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dypventura.com'),
  title: 'Ventura 2025 | DY Patil Entrepreneurship Summit',
  description: 'VENTURA 2025: Pitch. Network. Innovate. The annual flagship entrepreneurship summit of Dr. D. Y. Patil College of Engineering, Akurdi.',
  keywords: ['Ventura 2025', 'DY Patil', 'entrepreneurship summit', 'startup', 'pitch competition', 'Akurdi', 'EDC DYP'],
  alternates: {
    canonical: 'https://dypventura.com',
  },
  openGraph: {
    title: 'Ventura 2025 | DY Patil Entrepreneurship Summit',
    description: 'VENTURA 2025: Pitch. Network. Innovate. The annual flagship entrepreneurship summit of Dr. D. Y. Patil College of Engineering, Akurdi.',
    url: 'https://dypventura.com',
    siteName: 'Ventura 2025',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ventura 2025 | DY Patil Entrepreneurship Summit',
    description: 'VENTURA 2025: Pitch. Network. Innovate.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-gradient-to-b from-neutral-950 to-neutral-800">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
