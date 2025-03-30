'use client';

import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="section bg-light-gray">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gray-200 relative">
              {/* Placeholder for service image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AI CAD Consultant Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">AI CAD Consultant</h3>
              <p className="mb-4">
                Upload your CAD files for AI-powered analysis and receive optimization recommendations based on your specific manufacturing method and application.
              </p>
              <Link href="/cad-consultant" className="btn block text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gray-200 relative">
              {/* Placeholder for service image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                3D Printing Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">3D Printing Optimization</h3>
              <p className="mb-4">
                Specialized analysis for FDM and SLA 3D printing processes, ensuring optimal print quality, strength, and material efficiency.
              </p>
              <Link href="/services/3d-printing" className="btn block text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gray-200 relative">
              {/* Placeholder for service image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                CNC Manufacturing Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">CNC & Manufacturing</h3>
              <p className="mb-4">
                Design optimization for CNC machining, with focus on manufacturability, tolerance analysis, and cost reduction.
              </p>
              <Link href="/services/cnc" className="btn block text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
