'use client';

// import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video background - will be replaced with actual video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video - in production this would be a video element */}
        <div className="w-full h-full bg-primary/80">
          {/* This div simulates a video for the mockup */}
          <div className="w-full h-full bg-gradient-to-r from-primary/90 to-secondary/70"></div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>
      
      {/* Content */}
      <div className="container relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
            Engineering Solutions Through AI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Optimize your CAD designs for manufacturing with AI-powered analysis and recommendations
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/cad-consultant" className="btn">
              Try CAD Consultant
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
