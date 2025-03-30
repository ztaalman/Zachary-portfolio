'use client';

export default function HowItWorksSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="relative mt-16">
          {/* Process line */}
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-0.5 bg-secondary z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4">
              <div className="w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-5 z-10">
                1
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Upload CAD File</h4>
              <p className="text-gray-600">Upload your CAD file in any standard format</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4">
              <div className="w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-5 z-10">
                2
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Specify Requirements</h4>
              <p className="text-gray-600">Select manufacturing method and application</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/4">
              <div className="w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-5 z-10">
                3
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">AI Analysis</h4>
              <p className="text-gray-600">Our AI analyzes your design for optimization</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-5 z-10">
                4
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Get Recommendations</h4>
              <p className="text-gray-600">Receive detailed recommendations and improvements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
