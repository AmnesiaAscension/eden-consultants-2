
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

const Home: React.FC = () => {
  const [featured, setFeatured] = useState<CaseStudy[]>([]);

  useEffect(() => {
    fetch('./data/case-studies.json')
      .then(res => res.json())
      .then(data => {
        setFeatured((data as CaseStudy[]).slice(0, 3));
      })
      .catch(err => console.error('Error loading case studies:', err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/blueprint/1600/900')] bg-cover bg-center"></div>
        <div className="max-w-[1120px] mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Development Consulting for Commercial Projects.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Guidance for shopping centers, QSR/fast food, restaurants, office condos, and medical condos—from early feasibility through execution support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact#discovery" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg text-center w-full sm:w-auto">
                Request a Discovery Call
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold py-4 px-8 rounded-lg transition-all text-center w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Strategic Guidance</span>
              <h2 className="text-3xl font-bold mt-4 mb-8">Reducing Risk Before Dollars Hit the Ground</h2>
              <ul className="space-y-4">
                {[
                  "Site selection and feasibility clarity",
                  "Entitlements and permitting navigation",
                  "Budget and schedule realism early",
                  "Coordination across architects, civil, MEP, and contractors",
                  "Risk reduction before dollars hit the ground"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 rounded-2xl h-48 flex items-center justify-center p-8 text-center flex-col">
                <span className="text-3xl font-bold text-slate-900">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-2">Compliance Focus</span>
              </div>
              <div className="bg-blue-600 rounded-2xl h-48 flex items-center justify-center p-8 text-center flex-col text-white">
                <span className="text-3xl font-bold">Predictable</span>
                <span className="text-xs text-white/70 uppercase tracking-widest mt-2">Timelines</span>
              </div>
              <div className="col-span-2 bg-slate-900 rounded-2xl h-48 flex items-center justify-center p-8 text-center flex-col text-white">
                <span className="text-3xl font-bold italic">Eden Consultants</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-2">Professional Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Core Advisory Services</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">Focused expertise for developers navigating the complex lifecycle of commercial projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Feasibility & Site Selection Support", desc: "Detailed analysis of site constraints and project viability before you commit." },
              { title: "Concept-to-Pro Forma Input", desc: "Expert feedback on development concepts to align with realistic financial modeling." },
              { title: "Entitlements & Permitting Strategy", desc: "Navigating local jurisdictions and building a roadmap for approvals." },
              { title: "Consultant Team Coordination", desc: "Bridging the gap between architects, civil, and specialized engineering firms." },
              { title: "Budget/Schedule Advisory", desc: "Early-stage logic checks to prevent costly delays and overruns." },
              { title: "Owner Representation (TBD)", desc: "Direct oversight of project milestones and stakeholder communication." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-blue-600 text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Shopping Centers", "Fast Food / QSR", "Restaurants", "Office Condos", "Medical Condos"].map((ind, idx) => (
              <div key={idx} className="aspect-square bg-slate-50 rounded-xl flex items-center justify-center p-6 text-center border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-default">
                <span className="font-bold text-slate-900 text-sm leading-tight uppercase tracking-wide">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold">Proven Outcomes</h2>
              <p className="text-slate-600 mt-2">Real-world results for our clients.</p>
            </div>
            <Link to="/case-studies" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
              View All Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.length > 0 ? (
              featured.map((cs) => (
                <Link key={cs.slug} to={`/case-study?id=${cs.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 block">
                  <div className="aspect-video bg-slate-200 overflow-hidden relative">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider backdrop-blur-sm">
                        {cs.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">{cs.title}</h3>
                    <p className="text-slate-600 text-xs mb-4 line-clamp-2 leading-relaxed">{cs.overview}</p>
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Case Study &rarr;</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500 italic">Representative project profiles loading...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-[1120px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tell us what you’re developing—get a clear next step.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#discovery" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-slate-100 transition-all">
              Request a Discovery Call
            </Link>
            <Link to="/contact" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-blue-800 transition-all">
              General Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
