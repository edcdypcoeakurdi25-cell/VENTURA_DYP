import React from 'react';
import Link from 'next/link';

export function LocationSection() {
  const mapUrl = 'https://maps.app.goo.gl/i1SQrT1ZeDz89gep9';

  return (
    <section id="contact" className="relative w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-headline mb-4">
          Find Us Here
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-8">
          The event will be held at the vibrant campus of DY Patil College of
          Engineering, Akurdi.
        </p>

        {/* Optional Embedded Interactive / Dark Styled Map */}
        <div className="w-full max-w-4xl aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden border border-blue-900/50 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative bg-[#060D24]/60 backdrop-blur-sm mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2730103732684!2d73.7594957!3d18.6449349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DY Patil College of Engineering Campus Map"
          />
        </div>

        {/* Full Address */}
        <p className="text-xs sm:text-sm font-medium tracking-widest text-gray-300 uppercase max-w-3xl leading-relaxed mb-8">
          DY PATIL COLLEGE OF ENGINEERING, D. Y. PATIL EDUCATIONAL COMPLEX, SECTOR 29, NIGDI PRADHIKARAN, AKURDI, PUNE, MAHARASHTRA 411044
        </p>

        {/* Action Button */}
        <Link
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#FF4D26] hover:bg-[#e03c15] text-white font-black px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_22px_rgba(255,77,38,0.5)] transition-all duration-200 transform hover:scale-[1.03]"
        >
          VIEW ON GOOGLE MAPS
        </Link>
      </div>
    </section>
  );
}
