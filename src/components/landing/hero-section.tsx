'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, MapPin } from 'lucide-react';
import { HeroOrbVisual } from './hero-orb-visual';

export function HeroSection() {
  const registerLink =
    'https://unstop.com/college-fests/dyp-ventura-dr-d-y-patil-college-of-engineering-dypcoe-akurdi-pune-501009';
  const videoLink =
    'https://www.youtube.com/embed/Q4L66jZByhQ?si=l9pUEIR9ABA_mgOX';
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 md:py-20 lg:py-28">
      {/* Background Dynamic Light Beams & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[3px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent -rotate-45 blur-[1px]" />
        <div className="absolute top-10 left-10 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -rotate-45 blur-[2px]" />
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-700/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            {/* Top Label */}
            <div className="space-y-1">
              <span className="text-white/90 font-bold tracking-[0.3em] text-sm sm:text-base uppercase font-headline">
                DYPCOE
              </span>

              {/* Massive VENTURA Title with Diagonal Streaks */}
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight uppercase leading-none font-headline text-transparent bg-clip-text bg-gradient-to-b from-[#4F86F7] via-[#2A65F5] to-[#1442E6] drop-shadow-[0_0_35px_rgba(42,101,245,0.4)]">
                  VENTURA
                </h1>
                {/* 2026 Title */}
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight text-white leading-none font-headline -mt-2 sm:-mt-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  2026
                </div>
              </div>
            </div>

            {/* Tagline Box: IDEATE. INNOVATE. IMPACT. */}
            <div>
              <div className="inline-block bg-[#081236] border border-[#1E3A8A] px-5 py-2.5 rounded-none shadow-[0_0_15px_rgba(30,58,138,0.4)]">
                <span className="text-white font-black tracking-[0.2em] text-xs sm:text-sm uppercase font-headline">
                  IDEATE. INNOVATE. IMPACT.
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Join us for a 3-day nationwide startup pitching event. Present
              your vision, connect with investors and launch your venture.
            </p>

            {/* Date & Location Card */}
            <div className="relative max-w-md rounded-2xl border border-blue-900/60 bg-gradient-to-r from-[#061133]/90 via-[#03081E]/95 to-[#010410]/95 p-4 sm:p-5 flex items-center justify-between backdrop-blur-md shadow-[0_0_25px_rgba(24,75,255,0.2)]">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

              {/* Date Block */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-headline">
                  26th-28th
                </span>
                <span className="text-xs sm:text-sm text-blue-200/80 font-medium mt-0.5">
                  Sept, 2026
                </span>
              </div>

              {/* Dashed Vertical Divider */}
              <div className="h-11 border-r border-dashed border-blue-500/40 mx-4 sm:mx-6" />

              {/* Location Block */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-blue-950/40 text-white">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide font-headline">
                    DYP COE
                  </span>
                  <span className="text-xs text-blue-200/80 font-medium">
                    Akurdi, Pune
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#184BFF] hover:bg-[#123cd2] text-white font-black px-7 py-3 text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_22px_rgba(24,75,255,0.6)] transition-all duration-200 transform hover:scale-[1.03] text-center"
              >
                REGISTER NOW
              </Link>
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="rounded-full bg-[#FF4D26] hover:bg-[#e03c15] text-white font-black px-7 py-3 text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_22px_rgba(255,77,38,0.5)] transition-all duration-200 transform hover:scale-[1.03] text-center"
              >
                REGISTRATION PROCESS
              </button>
            </div>
          </div>

          {/* Right Column: Centerpiece 3D Orb Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroOrbVisual />
          </div>
        </div>
      </div>

      {/* Video Overlay Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-blue-500/40 shadow-[0_0_40px_rgba(24,75,255,0.4)] bg-black">
            <iframe
              src={videoLink}
              title="Registration Process Video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
