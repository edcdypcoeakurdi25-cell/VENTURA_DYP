import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  const mapUrl = 'https://maps.app.goo.gl/i1SQrT1ZeDz89gep9';

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Find Us Here
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The event will be held at the vibrant campus of DY Patil College of
            Engineering, Akurdi.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1639.6163615676662!2d73.75823271720257!3d18.644934912277815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1757088994467!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-lg font-medium">
            DY Patil College of Engineering, D. Y. Patil Educational Complex,
            Sector 29, Nigdi Pradhikaran, Akurdi, Pune, Maharashtra 411044
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
