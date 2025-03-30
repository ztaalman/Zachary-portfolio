'use client';

import { useState } from 'react';

interface AnalysisOptionsProps {
  onOptionsChanged: (options: AnalysisOptions) => void;
}

export interface AnalysisOptions {
  manufacturingMethod: string;
  application: string;
  material: string;
  tolerance: number | null;
  additionalRequirements: string;
}

export default function AnalysisOptions({ onOptionsChanged }: AnalysisOptionsProps) {
  const [options, setOptions] = useState<AnalysisOptions>({
    manufacturingMethod: '3D Printing (FDM)',
    application: 'General Purpose',
    material: 'PLA',
    tolerance: null,
    additionalRequirements: '',
  });
  
  const handleManufacturingMethodChange = (method: string) => {
    const newOptions = { ...options, manufacturingMethod: method };
    setOptions(newOptions);
    onOptionsChanged(newOptions);
  };
  
  const handleApplicationChange = (application: string) => {
    const newOptions = { ...options, application };
    setOptions(newOptions);
    onOptionsChanged(newOptions);
  };
  
  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOptions = { ...options, material: e.target.value };
    setOptions(newOptions);
    onOptionsChanged(newOptions);
  };
  
  const handleToleranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    const newOptions = { ...options, tolerance: value };
    setOptions(newOptions);
    onOptionsChanged(newOptions);
  };
  
  const handleRequirementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newOptions = { ...options, additionalRequirements: e.target.value };
    setOptions(newOptions);
    onOptionsChanged(newOptions);
  };
  
  const manufacturingMethods = [
    '3D Printing (FDM)',
    '3D Printing (SLA)',
    'CNC Machining',
    'Sheet Metal',
    'Injection Molding',
  ];
  
  const applications = [
    'General Purpose',
    'Aerospace',
    'Automotive',
    'Construction',
    'Medical',
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div>
        {/* Manufacturing Method */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-4">Manufacturing Method</h3>
          <div className="flex flex-wrap gap-2">
            {manufacturingMethods.map((method) => (
              <label 
                key={method}
                className={`flex items-center px-4 py-2 rounded cursor-pointer transition-colors ${
                  options.manufacturingMethod === method 
                    ? 'bg-secondary text-white' 
                    : 'bg-light-gray hover:bg-secondary/10'
                }`}
              >
                <input 
                  type="radio" 
                  name="manufacturing" 
                  className="mr-2" 
                  checked={options.manufacturingMethod === method}
                  onChange={() => handleManufacturingMethodChange(method)}
                /> 
                {method}
              </label>
            ))}
          </div>
        </div>
        
        {/* Application */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-4">Application</h3>
          <div className="flex flex-wrap gap-2">
            {applications.map((app) => (
              <label 
                key={app}
                className={`flex items-center px-4 py-2 rounded cursor-pointer transition-colors ${
                  options.application === app 
                    ? 'bg-secondary text-white' 
                    : 'bg-light-gray hover:bg-secondary/10'
                }`}
              >
                <input 
                  type="radio" 
                  name="application" 
                  className="mr-2" 
                  checked={options.application === app}
                  onChange={() => handleApplicationChange(app)}
                /> 
                {app}
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        {/* Material */}
        <div className="mb-6">
          <label htmlFor="material" className="block font-medium mb-2">Material</label>
          <select 
            id="material" 
            className="w-full p-3 border border-gray-300 rounded-md"
            value={options.material}
            onChange={handleMaterialChange}
          >
            <option>PLA</option>
            <option>ABS</option>
            <option>PETG</option>
            <option>TPU</option>
            <option>Nylon</option>
            <option>Aluminum</option>
            <option>Steel</option>
            <option>Other (specify in notes)</option>
          </select>
        </div>
        
        {/* Tolerance */}
        <div className="mb-6">
          <label htmlFor="tolerance" className="block font-medium mb-2">Required Tolerance (mm)</label>
          <input 
            type="number" 
            id="tolerance" 
            placeholder="e.g. 0.1" 
            step="0.01" 
            min="0"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={options.tolerance || ''}
            onChange={handleToleranceChange}
          />
        </div>
        
        {/* Additional Requirements */}
        <div>
          <label htmlFor="notes" className="block font-medium mb-2">Additional Requirements</label>
          <textarea 
            id="notes" 
            placeholder="Describe any specific requirements or constraints..."
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            value={options.additionalRequirements}
            onChange={handleRequirementsChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
