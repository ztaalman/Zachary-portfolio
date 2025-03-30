'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FileUpload from '@/components/cad-consultant/FileUpload';
import AnalysisOptions, { AnalysisOptions as OptionsType } from '@/components/cad-consultant/AnalysisOptions';
import AnalysisResults from '@/components/cad-consultant/AnalysisResults';
import PricingPlans from '@/components/cad-consultant/PricingPlans';
import CheckoutModal from '@/components/cad-consultant/CheckoutModal';

export default function CADConsultant() {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisOptions, setAnalysisOptions] = useState<OptionsType>({
    manufacturingMethod: '3D Printing (FDM)',
    application: 'General Purpose',
    material: 'PLA',
    tolerance: null,
    additionalRequirements: '',
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0 });
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
  };
  
  const handleOptionsChanged = (options: OptionsType) => {
    setAnalysisOptions(options);
  };
  
  const handleAnalyze = () => {
    if (!selectedFile) {
      alert('Please upload a CAD file first');
      return;
    }
    
    setIsAnalyzing(true);
    setShowResults(true);
    setActiveTab('results');
  };
  
  const handleSelectPlan = (plan: string, price: number) => {
    setSelectedPlan({ name: plan, price });
    setShowCheckout(true);
  };
  
  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <section className="bg-primary text-white pt-32 pb-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">AI CAD Consultant</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Upload your CAD files for AI-powered analysis and receive optimization recommendations based on your specific manufacturing method and application.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex bg-dark-gray">
              <button 
                className={`px-6 py-4 text-white font-medium ${activeTab === 'upload' ? 'bg-accent' : ''}`}
                onClick={() => setActiveTab('upload')}
              >
                Upload & Analyze
              </button>
              <button 
                className={`px-6 py-4 text-white font-medium ${activeTab === 'results' ? 'bg-accent' : ''}`}
                onClick={() => setActiveTab('results')}
              >
                Results
              </button>
              <button 
                className={`px-6 py-4 text-white font-medium ${activeTab === 'history' ? 'bg-accent' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {activeTab === 'upload' && (
                <>
                  {/* Upload Area */}
                  <FileUpload onFileSelected={handleFileSelected} />
                  
                  {/* Options Grid */}
                  <AnalysisOptions onOptionsChanged={handleOptionsChanged} />
                  
                  {/* Buttons */}
                  <div className="text-center mt-10">
                    <button className="btn btn-secondary mr-4">Save Settings</button>
                    <button 
                      className="btn"
                      onClick={handleAnalyze}
                    >
                      Analyze Design
                    </button>
                  </div>
                </>
              )}
              
              {activeTab === 'results' && (
                <div>
                  {showResults ? (
                    <AnalysisResults 
                      file={selectedFile} 
                      options={analysisOptions} 
                      isAnalyzing={isAnalyzing} 
                    />
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-5xl text-gray-300 mb-4">📊</div>
                      <h3 className="text-xl font-medium text-gray-500 mb-2">No Analysis Results Yet</h3>
                      <p className="text-gray-400 mb-6">Upload and analyze a CAD file to see results here</p>
                      <button 
                        className="btn"
                        onClick={() => setActiveTab('upload')}
                      >
                        Go to Upload
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'history' && (
                <div className="text-center py-12">
                  <div className="text-5xl text-gray-300 mb-4">📋</div>
                  <h3 className="text-xl font-medium text-gray-500 mb-2">No Analysis History</h3>
                  <p className="text-gray-400 mb-6">Your previous analyses will appear here</p>
                  <button 
                    className="btn"
                    onClick={() => setActiveTab('upload')}
                  >
                    Analyze Your First Design
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingPlans onSelectPlan={handleSelectPlan} />
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={showCheckout} 
        onClose={() => setShowCheckout(false)} 
        plan={selectedPlan} 
      />
      
      <Footer />
    </main>
  );
}
