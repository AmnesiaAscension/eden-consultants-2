
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CaseStudy } from '../types';

const CaseStudyDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/case-studies.json')
      .then(res => res.json())
      .then(data => {
        const found = (data as CaseStudy[]).find(cs => cs.slug === id);
        setStudy(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading case study details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500 italic">Loading project details...</p>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-slate-600 mb-8">The project profile you are looking for may have moved or doesn't exist.</p>
        <Link to="/case-studies" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
          View All Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Detail Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="max-w-[1120px] mx-auto px-4 w-full relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white text-xs font-black px-3 py-1 rounded uppercase tracking-widest mb-4">
              {study.industry}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-slate-200 font-bold text-sm uppercase tracking-widest">
              <div><span className="text-slate-400 block mb-1">Location</span> {study.location}</div>
              <div><span className="text-slate-400 block mb-1">Year</span> {study.year}</div>
              {study.timeline && <div><span className="text-slate-400 block mb-1">Timeline</span> {study.timeline}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-12">
                {study.overview}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-black">1</span>
                    What We Did
                  </h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {study.what_we_did.map((item, idx) => (
                      <li key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 font-medium text-slate-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">2</span>
                    Outcomes
                  </h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {study.outcomes.map((item, idx) => (
                      <li key={idx} className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 font-bold text-emerald-900 italic">
                        &ldquo;{item}&rdquo;
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold">Key Project Details</h4>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] text-blue-400 block uppercase font-black mb-1">Industry Sector</span>
                      <p className="font-bold">{study.industry}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-blue-400 block uppercase font-black mb-1">Status</span>
                      <p className="font-bold">Completed / Operational</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-blue-400 block uppercase font-black mb-1">Focus Tags</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 rounded">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
                  <h4 className="font-bold mb-4">Have a similar project?</h4>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">Let's discuss how we can bring these types of outcomes to your development.</p>
                  <Link to="/contact#discovery" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold block hover:bg-blue-700 transition-all">
                    Start Discovery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1120px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to explore your next development?</h2>
            <p className="text-slate-400">Join our clients in achieving predictable project success.</p>
          </div>
          <Link to="/case-studies" className="text-white border-b-2 border-white/40 hover:border-white transition-all font-bold pb-1">
            Browse More Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
