'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="footer-column">
            <h4 className="text-xl font-bold mb-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Zachary T.
            </h4>
            <p className="text-gray-300">
              Engineering solutions through AI and technical expertise.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="text-xl font-bold mb-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/cad-consultant" className="text-gray-300 hover:text-accent transition-colors">CAD Consultant</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-xl font-bold mb-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link href="/cad-consultant" className="text-gray-300 hover:text-accent transition-colors">AI CAD Consultant</Link></li>
              <li><Link href="/services/3d-printing" className="text-gray-300 hover:text-accent transition-colors">3D Printing Optimization</Link></li>
              <li><Link href="/services/cnc" className="text-gray-300 hover:text-accent transition-colors">CNC & Manufacturing</Link></li>
              <li><Link href="/services/aerospace" className="text-gray-300 hover:text-accent transition-colors">Aerospace Applications</Link></li>
              <li><Link href="/services/construction" className="text-gray-300 hover:text-accent transition-colors">Construction Components</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="text-xl font-bold mb-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>Chicago, Illinois</li>
              <li>Email: contact@example.com</li>
              <li>
                LinkedIn: 
                <a 
                  href="https://www.linkedin.com/in/zachary-taalman/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors ml-1"
                >
                  Zachary Taalman
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-5 text-center">
          <p>&copy; {new Date().getFullYear()} Zachary T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
