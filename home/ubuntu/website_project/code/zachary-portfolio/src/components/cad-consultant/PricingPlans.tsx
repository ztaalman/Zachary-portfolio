'use client';

import { useState } from 'react';

interface PricingPlanProps {
  onSelectPlan: (plan: string, price: number) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlanProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const handleSelectPlan = (plan: string, price: number) => {
    setSelectedPlan(plan);
    onSelectPlan(plan, price);
  };
  
  return (
    <section className="py-20 bg-light-gray">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pay-Per-Analysis */}
          <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${selectedPlan === 'Pay-Per-Analysis' ? 'ring-2 ring-accent' : ''}`}>
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Pay-Per-Analysis</h3>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-sm opacity-80">per CAD file</div>
            </div>
            <div className="p-6">
              <ul className="mb-6 space-y-4">
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Full AI analysis of one CAD file
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Detailed optimization recommendations
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Downloadable report
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  One revision included
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Email support
                </li>
              </ul>
              <button 
                className={`btn w-full ${selectedPlan === 'Pay-Per-Analysis' ? 'bg-accent' : ''}`}
                onClick={() => handleSelectPlan('Pay-Per-Analysis', 29)}
              >
                {selectedPlan === 'Pay-Per-Analysis' ? 'Selected' : 'Get Started'}
              </button>
            </div>
          </div>
          
          {/* Professional */}
          <div className={`bg-white rounded-lg shadow-xl overflow-hidden scale-105 transform z-10 transition-transform duration-300 hover:-translate-y-2 ${selectedPlan === 'Professional' ? 'ring-2 ring-accent' : ''}`}>
            <div className="bg-accent text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-sm opacity-80">per month</div>
            </div>
            <div className="p-6">
              <ul className="mb-6 space-y-4">
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Unlimited CAD file analyses
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Advanced optimization algorithms
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Priority processing
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Unlimited revisions
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Custom material library
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Priority email & phone support
                </li>
              </ul>
              <button 
                className={`btn w-full ${selectedPlan === 'Professional' ? 'bg-accent' : ''}`}
                onClick={() => handleSelectPlan('Professional', 99)}
              >
                {selectedPlan === 'Professional' ? 'Selected' : 'Subscribe Now'}
              </button>
            </div>
          </div>
          
          {/* Enterprise */}
          <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${selectedPlan === 'Enterprise' ? 'ring-2 ring-accent' : ''}`}>
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-1">$499</div>
              <div className="text-sm opacity-80">per month</div>
            </div>
            <div className="p-6">
              <ul className="mb-6 space-y-4">
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Everything in Professional plan
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Team collaboration features
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  API access for integration
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Custom analysis parameters
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Dedicated account manager
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold">
                  Training and onboarding
                </li>
              </ul>
              <button 
                className={`btn w-full ${selectedPlan === 'Enterprise' ? 'bg-accent' : ''}`}
                onClick={() => handleSelectPlan('Enterprise', 499)}
              >
                {selectedPlan === 'Enterprise' ? 'Selected' : 'Contact Sales'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
