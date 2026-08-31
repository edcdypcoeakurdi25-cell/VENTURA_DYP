'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export function HeroSection() {
  const registerLink =
    'https://unstop.com/p/dyp-ventura-2025-entrepreneurship-development-cell-dypcoe-1542359';

  const videoLink =
    'https://www.youtube.com/embed/Q4L66jZByhQ?si=l9pUEIR9ABA_mgOX';
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                VENTURA 2025
              </h1>
              <p className="text-xl font-semibold md:text-2xl font-headline">
                Pitch. Network. Innovate.
              </p>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Join us for a 2-day nationwide startup pitching event. Present
                your vision, connect with investors, and launch your venture.
              </p>
              <p className="font-bold text-lg text-foreground">
                September 15-16, 2025
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg">
                <Link href={registerLink} target="_blank">
                  Register Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setShowVideo(true)}
              >
                Registration Process
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50"></div>
              <Image
                src="/logo.png"
                alt="Ventura Logo"
                width={400}
                height={400}
                className="relative drop-shadow-2xl dark:invert"
                priority
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl aspect-video">
            <iframe
              src={videoLink}
              title="Registration Process Video"
              className="w-full h-full rounded-xl shadow-lg"
              allow="autoplay; fullscreen"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-red-500"
              aria-label="Close video"
            >
              <X size={40} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
