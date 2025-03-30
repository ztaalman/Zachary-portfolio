'use client';

import { useState } from 'react';

interface FileUploadProps {
  onFileSelected: (file: File) => void;
}

export default function FileUpload({ onFileSelected }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  
  const validFileTypes = ['.step', '.stp', '.iges', '.igs', '.stl', '.obj', '.f3d', '.sldprt'];
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };
  
  const validateAndProcessFile = (file: File) => {
    setFileError(null);
    
    // Check file extension
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!validFileTypes.includes(fileExtension)) {
      setFileError(`Invalid file type. Supported formats: ${validFileTypes.join(', ')}`);
      return;
    }
    
    // Check file size (limit to 50MB for simulation)
    if (file.size > 50 * 1024 * 1024) {
      setFileError('File size exceeds 50MB limit');
      return;
    }
    
    setFileName(file.name);
    onFileSelected(file);
  };
  
  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
        isDragging ? 'border-accent bg-accent/5' : 'border-secondary hover:bg-secondary/5'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input')?.click()}
    >
      <input 
        type="file"
        id="file-input"
        className="hidden"
        accept={validFileTypes.join(',')}
        onChange={handleFileInput}
      />
      
      <div className="text-5xl text-secondary mb-4">
        {fileName ? '📄' : '📁'}
      </div>
      
      <div>
        {fileName ? (
          <>
            <h3 className="text-xl font-bold text-primary mb-2">File Selected</h3>
            <p className="text-gray-700 mb-2">{fileName}</p>
            <p className="text-sm text-secondary">Click to change file</p>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold text-primary mb-2">Upload Your CAD File</h3>
            <p className="text-gray-500 mb-1">Drag and drop your file here or click to browse</p>
            <p className="text-gray-500">Supported formats: .STEP, .IGES, .STL, .OBJ, .F3D, .SLDPRT</p>
          </>
        )}
      </div>
      
      {fileError && (
        <div className="mt-4 text-red-500">
          {fileError}
        </div>
      )}
    </div>
  );
}
