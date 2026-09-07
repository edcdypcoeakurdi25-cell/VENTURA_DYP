import React from 'react';

export function AboutSection() {
  const highlights = [
    {
      title: '500+ Startup Pitches',
      description:
        'A massive platform for emerging startups to showcase their ideas to a diverse audience.',
    },
    {
      title: 'Investor & Academia Connect',
      description:
        'Bringing together startups, investors, and academia to foster innovation and entrepreneurial excellence.',
    },
    {
      title: 'Mentorship',
      description:
        'Accelerate your growth through one-on-one strategy sessions with seasoned industry leaders.',
    },
    {
      title: 'Startup Expo',
      description:
        'Startups get a chance to showcase their innovations to the public and potential investors.',
    },
  ];

  return (
    <section id="about" className="relative w-full bg-black py-16 md:py-24 lg:py-32">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          {/* Orange Pill Badge */}
          <div>
            <span className="inline-block rounded-full bg-[#FF4D26] px-6 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_18px_rgba(255,77,38,0.45)] font-headline">
              ABOUT THE EVENT
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-headline max-w-4xl">
            The Epicenter of Entrepreneurial Excellence
          </h2>

          {/* Body Paragraph */}
          <p className="max-w-4xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal pt-2">
            Ventura is the annual flagship entrepreneurship summit of D. Y. Patil
            College of Engineering, Akurdi, organized by the Entrepreneurship
            Development Cell &amp; DYP Dnyansagar Incubation Foundation . The
            summit features over 500 startup pitches, investors, Hi-Tea
            sessions, and the Mentorship, bringing together startups, investors,
            and academia on a common platform to foster innovation and
            entrepreneurial excellence.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-blue-900/40 bg-gradient-to-b from-[#081333]/90 via-[#03071A]/95 to-black p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-headline mb-4 group-hover:text-blue-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
