'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Designs?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Try our AI CAD Consultant today and transform your engineering process with data-driven recommendations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/cad-consultant" className="btn">
            Get Started
          </Link>
          <Link href="/pricing" className="btn btn-outline">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
