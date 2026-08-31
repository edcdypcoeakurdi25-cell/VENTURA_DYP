'use client'

import { useState, useEffect } from "react";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { TimelineSection } from "@/components/landing/timeline-section";
import { LocationSection } from "@/components/landing/location-section";
import { Footer } from "@/components/landing/footer";
import { SplashScreen } from "@/components/splash-screen";
import { BackgroundBeamsWithCollision } from "@/components/background-beams";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // If you want the splash screen to show only once per session, use this:
    // const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    // if (hasSeenSplash) {
    //   setShowSplash(false);
    // } else {
    //   sessionStorage.setItem("hasSeenSplash", "true");
    // }
  }, []);

  const handleSplashFinished = () => {
    setShowSplash(false);
  };
  
  if (showSplash) {
    return <SplashScreen onFinished={handleSplashFinished} />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <BackgroundBeamsWithCollision>
          <HeroSection />
        </BackgroundBeamsWithCollision>
        <AboutSection />
        <TimelineSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
