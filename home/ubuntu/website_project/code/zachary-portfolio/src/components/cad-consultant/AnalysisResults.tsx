'use client';

import { useState, useEffect } from 'react';

interface AnalysisResultsProps {
  file: File | null;
  options: {
    manufacturingMethod: string;
    application: string;
    material: string;
    tolerance: number | null;
    additionalRequirements: string;
  };
  isAnalyzing: boolean;
}

export default function AnalysisResults({ file, options, isAnalyzing }: AnalysisResultsProps) {
  interface AnalysisResult {
    fileName: string;
    fileSize: number;
    fileType: string;
    manufacturingMethod: string;
    application: string;
    material: string;
    recommendations: Array<{id: number, title: string, description: string}>;
    analysisDate: string;
    modelComplexity: string;
    estimatedCost: {
      materials: string;
      labor: string;
      total: string;
    };
    manufacturingTime: string;
  }
  
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (isAnalyzing && file) {
      setLoading(true);
      
      // Simulate analysis delay
      const timer = setTimeout(() => {
        // Generate simulated results based on options
        const simulatedResults = generateSimulatedResults(file, options);
        setResults(simulatedResults);
        setLoading(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, file, options]);
  
  const generateSimulatedResults = (file: File, options: {
    manufacturingMethod: string;
    application: string;
    material: string;
    tolerance: number | null;
    additionalRequirements: string;
  }) => {
    // This function generates simulated analysis results based on the file and options
    // In a real implementation, this would be replaced with actual CAD analysis
    
    const fileName = file.name;
    const fileSize = file.size;
    const fileType = file.name.split('.').pop()?.toLowerCase() || 'unknown';
    
    // Generate recommendations based on manufacturing method
    const recommendations = [];
    
    if (options.manufacturingMethod.includes('FDM')) {
      recommendations.push({
        id: 1,
        title: 'Wall Thickness Adjustment',
        description: 'Current minimum wall thickness (0.8mm) is below recommended value for FDM printing with PLA. Increase to at least 1.2mm for better structural integrity.'
      });
      
      recommendations.push({
        id: 2,
        title: 'Support Structure Requirements',
        description: 'Overhangs detected at coordinates [X:45, Y:20, Z:15]. Consider adding chamfers or 45° angles to reduce support material needs.'
      });
      
      recommendations.push({
        id: 3,
        title: 'Print Orientation',
        description: 'Recommended orientation: Z-axis aligned with the longest dimension to minimize layer lines on critical surfaces.'
      });
      
      recommendations.push({
        id: 4,
        title: 'Infill Optimization',
        description: `Gyroid infill at 15% density recommended for optimal strength-to-weight ratio for ${options.application.toLowerCase()} applications.`
      });
    } else if (options.manufacturingMethod.includes('SLA')) {
      recommendations.push({
        id: 1,
        title: 'Resin Drainage Holes',
        description: 'Enclosed volumes detected. Add drainage holes of at least 3mm diameter to prevent resin trapping and ensure proper curing.'
      });
      
      recommendations.push({
        id: 2,
        title: 'Support Structure Placement',
        description: 'Critical areas requiring support identified. Recommend 45° orientation to minimize support contact with visible surfaces.'
      });
    } else if (options.manufacturingMethod.includes('CNC')) {
      recommendations.push({
        id: 1,
        title: 'Internal Corner Radius',
        description: 'Internal corners should have minimum radius of 1/3 of tool diameter. Current design has sharp internal corners that cannot be machined with standard tooling.'
      });
      
      recommendations.push({
        id: 2,
        title: 'Machining Approach',
        description: 'Complex geometry detected. Recommend 5-axis machining for optimal results or design simplification for 3-axis compatibility.'
      });
      
      recommendations.push({
        id: 3,
        title: 'Fixturing Strategy',
        description: 'Design requires multiple setups. Consider adding fixturing features or redesigning for single-setup manufacturing.'
      });
    }
    
    // Add application-specific recommendations
    if (options.application === 'Aerospace') {
      recommendations.push({
        id: recommendations.length + 1,
        title: 'Material Certification',
        description: `${options.material} requires aerospace certification. Ensure material batch has appropriate traceability documentation.`
      });
    } else if (options.application === 'Medical') {
      recommendations.push({
        id: recommendations.length + 1,
        title: 'Biocompatibility',
        description: `Verify ${options.material} is certified for medical use with appropriate ISO 10993 testing documentation.`
      });
    }
    
    // Add tolerance-specific recommendations
    if (options.tolerance !== null && options.tolerance < 0.05) {
      recommendations.push({
        id: recommendations.length + 1,
        title: 'Tolerance Feasibility',
        description: `Tolerance of ${options.tolerance}mm is challenging for ${options.manufacturingMethod}. Consider relaxing tolerances or alternative manufacturing method.`
      });
    }
    
    return {
      fileName,
      fileSize,
      fileType,
      manufacturingMethod: options.manufacturingMethod,
      application: options.application,
      material: options.material,
      recommendations,
      analysisDate: new Date().toISOString(),
      modelComplexity: 'Medium',
      estimatedCost: {
        materials: '$15-25',
        labor: '$40-60',
        total: '$55-85'
      },
      manufacturingTime: '8-12 hours'
    };
  };
  
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mb-4"></div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">Analyzing CAD File</h3>
        <p className="text-gray-500">This may take a few moments...</p>
      </div>
    );
  }
  
  if (!results) {
    return null;
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Analysis Results</h2>
        <div>
          <button className="btn btn-secondary mr-3">Download Report</button>
          <button className="btn">Share Results</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Model Viewer */}
        <div className="bg-dark-gray rounded-lg h-96 flex flex-col items-center justify-center text-white p-6">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-medium mb-2">3D Model Viewer</h3>
          <p className="text-center text-gray-400 mb-4">
            Simulated view of {results.fileName}
          </p>
          <div className="bg-gray-800 w-full p-4 rounded text-xs font-mono">
            <p>File: {results.fileName}</p>
            <p>Size: {(results.fileSize / 1024 / 1024).toFixed(2)} MB</p>
            <p>Type: {results.fileType}</p>
            <p>Complexity: {results.modelComplexity}</p>
          </div>
        </div>
        
        {/* Recommendations */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">Optimization Recommendations</h3>
          
          {results.recommendations.map((rec: {id: number, title: string, description: string}) => (
            <div key={rec.id} className="mb-5 pb-5 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <h4 className="flex items-center font-medium mb-2 text-primary">
                <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs mr-2">{rec.id}</span>
                {rec.title}
              </h4>
              <p className="text-gray-700">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Manufacturing Details */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">Manufacturing Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-light-gray p-4 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Estimated Cost</h4>
            <p className="text-2xl font-bold text-secondary">{results.estimatedCost.total}</p>
            <div className="text-sm text-gray-600 mt-2">
              <p>Materials: {results.estimatedCost.materials}</p>
              <p>Labor: {results.estimatedCost.labor}</p>
            </div>
          </div>
          
          <div className="bg-light-gray p-4 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Manufacturing Time</h4>
            <p className="text-2xl font-bold text-secondary">{results.manufacturingTime}</p>
            <p className="text-sm text-gray-600 mt-2">Estimated production time</p>
          </div>
          
          <div className="bg-light-gray p-4 rounded-lg">
            <h4 className="font-medium text-primary mb-2">Material</h4>
            <p className="text-2xl font-bold text-secondary">{results.material}</p>
            <p className="text-sm text-gray-600 mt-2">{results.manufacturingMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
