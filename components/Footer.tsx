
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-300">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="#ffffff"/>
                <path d="M12 28V12H28V15H15V28H12Z" fill="#1e293b"/>
                <path d="M18 28V18H28V21H21V28H18Z" fill="#1e293b"/>
              </svg>
              Eden Consultants
            </div>
            <p className="text-sm max-w-sm">Expert development consulting for commercial real estate. Navigating risk, permitting, and feasibility to ensure project success.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>Phone: <a href="tel:TBD" className="hover:text-white transition-colors">TBD</a></li>
              <li>Email: <a href="mailto:TBD" className="hover:text-white transition-colors">TBD</a></li>
              <li className="text-slate-500 font-normal">Service Area: TBD</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1120px] mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Eden Consultants. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
