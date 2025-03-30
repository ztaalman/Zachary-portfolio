'use client';

// import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder image - will be replaced with actual profile image */}
            <div className="bg-gray-200 w-full h-96 relative">
              {/* This is a placeholder - in production this would be an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Profile Image
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Former Tesla QE turned Technical Sales Professional
            </h3>
            <p className="mb-4">
              Passionate about software, big data, and cultivating business relationships. With a background in Quality Engineering at Tesla and technical sales experience, I bring a unique perspective to engineering challenges.
            </p>
            <p className="mb-6">
              My expertise spans across various manufacturing methods including 3D printing, CNC machining, and specialized applications for aerospace and construction components.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">SolidWorks</span>
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">Fusion 360</span>
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">3D Printing</span>
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">CNC Machining</span>
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">Data Analysis</span>
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">Machine Learning</span>
            </div>
            
            <Link href="/about" className="btn">
              View Full Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
