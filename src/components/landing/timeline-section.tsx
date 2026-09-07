import React from 'react';

const scheduleDays = [
  {
    dayNumber: 'DAY 01',
    dateLabel: "26th Sept '26",
    dayName: 'SATURDAY',
    title: 'The Launch',
    subtitle: 'Where Ideas Take The Stage',
    events: [
      'Grand Inauguration',
      'Startup Pitching',
      'Investor Jury',
      'Speaker Sessions',
      'Startup Expo',
      'First Investor Connect',
    ],
  },
  {
    dayNumber: 'DAY 02',
    dateLabel: "27th Sept '26",
    dayName: 'SUNDAY',
    title: 'The Networking',
    subtitle: 'Where Conversations Become Opportunities',
    events: [
      'Startup Pitching Continues',
      'Investor Connect',
      'Founder–Mentor Interaction',
      'Mentorship Sessions',
      'Startup Expo',
      'Networking & Engagement',
    ],
  },
  {
    dayNumber: 'DAY 03',
    dateLabel: "28th Sept '26",
    dayName: 'MONDAY',
    title: 'The Grand Finale',
    subtitle: 'Where The Best Ideas Meet Opportunity',
    events: [
      'Top 20 Finalists',
      'Final Pitching',
      'Investor Jury Deliberation',
      'Live Audience',
      'Final Networking',
      'Winner Announcement',
      'Prize Distribution',
    ],
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative w-full bg-black py-16 md:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14">
          {/* Orange Pill Badge */}
          <div>
            <span className="inline-block rounded-full bg-[#FF4D26] px-6 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_18px_rgba(255,77,38,0.45)] font-headline">
              EVENT SCHEDULE
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-headline">
            Three Days of Opportunities
          </h2>
        </div>

        {/* 3 Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleDays.map((day) => (
            <div
              key={day.dayNumber}
              className="group relative rounded-2xl border border-blue-900/50 bg-gradient-to-b from-[#081230]/90 via-[#03071A]/95 to-black flex overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300"
            >
              {/* Left Vertical Blue Ribbon */}
              <div className="w-12 sm:w-14 bg-[#1838CC] flex flex-col items-center justify-center text-white py-6 flex-shrink-0 select-none">
                <div className="[writing-mode:vertical-rl] rotate-180 flex items-center justify-center gap-3">
                  <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    {day.dateLabel}
                  </span>
                  <span className="font-bold text-[10px] sm:text-xs tracking-widest text-blue-200 uppercase">
                    {day.dayName}
                  </span>
                </div>
              </div>

              {/* Right Main Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start">
                <div className="text-sm font-extrabold text-white tracking-widest uppercase font-headline">
                  {day.dayNumber}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#A5C2FF] font-headline mt-1 tracking-tight">
                  {day.title}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-white/90 mt-1 mb-6 font-headline leading-snug">
                  {day.subtitle}
                </p>

                {/* Bulleted Points */}
                <ul className="space-y-3 mt-auto">
                  {day.events.map((event, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
