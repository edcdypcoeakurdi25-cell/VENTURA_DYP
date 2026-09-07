import React from 'react';
import Image from 'next/image';

export function HeroOrbVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto flex flex-col items-center justify-center select-none py-6">
      {/* Ambient background light streaks and pillars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-blue-600/30 rounded-full blur-[90px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-cyan-400/25 rounded-full blur-[60px]" />
        
        {/* Subtle Sci-Fi Vertical Pillar Lines in the background */}
        <div className="absolute right-4 top-10 w-12 h-64 border-r border-blue-500/15 opacity-40" />
        <div className="absolute right-12 top-20 w-8 h-48 border-r border-blue-500/10 opacity-30" />
        <div className="absolute left-6 top-16 w-8 h-56 border-l border-blue-500/10 opacity-30" />
      </div>

      {/* Main Orb Container */}
      <div className="relative z-10 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        {/* Outer glowing halo */}
        <div className="absolute inset-1 rounded-full border border-blue-400/50 shadow-[0_0_60px_rgba(59,130,246,0.7)] animate-pulse" />

        {/* Exact Replicated Logo Orb Image */}
        <div className="relative w-[96%] h-[96%] rounded-full overflow-hidden flex items-center justify-center drop-shadow-[0_0_35px_rgba(37,99,235,0.9)]">
          <Image
            src="/ventura-orb.png"
            alt="Ventura Hologram Orb"
            width={800}
            height={800}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Futuristic Holographic Pedestal / Concentric Glowing Rings */}
      <div className="relative -mt-10 sm:-mt-14 w-[320px] sm:w-[400px] h-[75px] flex items-center justify-center">
        {/* Floor Glow Reflection */}
        <div className="absolute w-[280px] sm:w-[350px] h-[35px] bg-blue-500/30 rounded-[100%] blur-md" />

        {/* Outer Ring */}
        <div className="absolute w-[300px] sm:w-[370px] h-[55px] rounded-[100%] border-2 border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />

        {/* Middle Ring */}
        <div className="absolute w-[240px] sm:w-[300px] h-[40px] rounded-[100%] border border-cyan-400/70 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />

        {/* Inner Solid Pedestal Surface */}
        <div className="absolute w-[180px] sm:w-[220px] h-[26px] rounded-[100%] bg-gradient-to-b from-blue-500/40 via-blue-900/50 to-black/80 border border-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
      </div>

      {/* Under-Orb Branding */}
      <div className="mt-4 flex flex-col items-center justify-center text-center">
        <div className="font-black text-2xl sm:text-3xl tracking-wider flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#2563EB] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            DYP-VENTUR
          </span>
          <span className="relative inline-flex items-center text-[#2563EB]">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD]">
              A
            </span>
            <svg
              className="absolute inset-0 w-full h-full text-[#93C5FD] pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 18 V7 M8 11 L12 7 L16 11" stroke="#93C5FD" strokeWidth="2.5" />
            </svg>
          </span>
        </div>

        <div className="font-semibold tracking-[0.22em] text-[#93C5FD]/90 uppercase text-[10px] sm:text-xs mt-1">
          EDC DYPCOE &bull; IIC DYPCOE &bull; DYP DIF
        </div>
      </div>
    </div>
  );
}
