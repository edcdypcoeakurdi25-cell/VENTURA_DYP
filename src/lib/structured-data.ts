// JSON-LD Structured Data for Google Rich Results
// Covers: Event, Organization, BreadcrumbList schemas

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "VENTURA 2025",
  "description": "Ventura is the annual flagship entrepreneurship summit of Dr. D. Y. Patil College of Engineering, Akurdi, organized by the Entrepreneurship Development Cell & Incubation and Innovation Cell. The summit features over 500 startup pitches, investors, Hi-Tea sessions, and the signature IPL Auction game.",
  "startDate": "2025-09-15",
  "endDate": "2025-09-16",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "url": "https://dypventura.com",
  "image": "https://dypventura.com/logo.png",
  "location": {
    "@type": "Place",
    "name": "D.Y. Patil College of Engineering",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D. Y. Patil Educational Complex, Sector 29, Nigdi Pradhikaran",
      "addressLocality": "Akurdi, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.644934,
      "longitude": 73.758232
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Entrepreneurship Development Cell, DY Patil College of Engineering",
    "url": "https://dypventura.com"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://unstop.com/p/dyp-ventura-2025-entrepreneurship-development-cell-dypcoe-1542359",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "keywords": [
    "startup pitching",
    "entrepreneurship summit",
    "DY Patil",
    "Ventura 2025",
    "EDC",
    "startup expo",
    "investor connect",
    "Pune startup event"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EDC DY Patil College of Engineering",
  "url": "https://dypventura.com",
  "logo": "https://dypventura.com/logo.png",
  "description": "Entrepreneurship Development Cell & Incubation and Innovation Cell at Dr. D. Y. Patil College of Engineering, Akurdi, Pune.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "D. Y. Patil Educational Complex, Sector 29, Nigdi Pradhikaran",
    "addressLocality": "Akurdi, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411044",
    "addressCountry": "IN"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dypventura.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://dypventura.com/#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://dypventura.com/#contact"
    }
  ]
};
