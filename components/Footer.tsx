
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="#ffffff"/>
                <path d="M12 28V12H28V15H15V28H12Z" fill="#1e293b"/>
                <path d="M18 28V18H28V21H21V28H18Z" fill="#1e293b"/>
              </svg>
              <span className="font-bold text-lg uppercase tracking-wider">Eden Consultants</span>
            </div>
            <p className="text-sm leading-relaxed">
              Expert development consulting for commercial real estate. Navigating risk, permitting, and feasibility to ensure project success.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:TBD" className="hover:text-white transition-colors">Phone: TBD</a></li>
              <li><a href="mailto:TBD" className="hover:text-white transition-colors">Email: TBD</a></li>
              <li className="text-slate-500">Service Area: TBD</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Eden Consultants. All rights reserved.</p>
          <p>TBD - Development Consulting Firm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
