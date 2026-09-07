import React from 'react';
import Image from 'next/image';

interface VenturaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
}

export function VenturaLogo({ className = '', size = 'md', showSubtext = true }: VenturaLogoProps) {
  const sizeMap = {
    sm: { icon: 34, title: 'text-lg', sub: 'text-[7px]' },
    md: { icon: 44, title: 'text-xl', sub: 'text-[8.5px]' },
    lg: { icon: 56, title: 'text-2xl', sub: 'text-[10px]' },
    xl: { icon: 72, title: 'text-3xl', sub: 'text-[12px]' },
  };

  const { icon, title, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Brand Orb Image with Glow */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden drop-shadow-[0_0_12px_rgba(37,99,235,0.85)]"
        style={{ width: icon, height: icon }}
      >
        <Image
          src="/ventura-orb.png"
          alt="Ventura Logo Orb"
          width={icon * 2}
          height={icon * 2}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-black tracking-wider flex items-center leading-none ${title}`}>
          <span className="text-white">DYP-</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A85F6] via-[#3B82F6] to-[#2563EB]">
            VENTUR
          </span>
          <span className="relative inline-flex items-center text-[#2563EB]">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]">
              A
            </span>
            <svg
              className="absolute inset-0 w-full h-full text-[#60A5FA] pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 18 V7 M8 11 L12 7 L16 11" stroke="#60A5FA" strokeWidth="2.5" />
            </svg>
          </span>
        </div>

        {showSubtext && (
          <div className={`font-semibold tracking-[0.22em] text-[#93C5FD] uppercase mt-1 leading-tight ${sub}`}>
            EDC DYPCOE • IIC DYPCOE • DYP DIF
          </div>
        )}
      </div>
    </div>
  );
}
