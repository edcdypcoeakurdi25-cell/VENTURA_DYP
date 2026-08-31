'use client';

import { useIsMobile } from "@/hooks/use-mobile";

type SplashScreenProps = {
  onFinished: () => void;
};

export function SplashScreen({ onFinished }: SplashScreenProps) {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null; // Don't render anything until we know the screen size
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        onEnded={onFinished}
        className="object-cover"
        style={
          isMobile
            ? { minWidth: '100%', minHeight: 'auto', transform: 'scale(1.7)' }
            : { width: '100%', height: 'auto' }
        }
      >
        <source src="/DYP_Ventura_Logo_Animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
