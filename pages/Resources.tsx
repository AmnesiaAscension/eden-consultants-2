
import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="max-w-[1120px] mx-auto px-4">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Resources for Developers</h1>
          <p className="text-slate-600">Standard tools and insights to help you manage commercial project risk.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Due Diligence Checklist</h3>
            <p className="text-slate-600 text-sm mb-8 flex-grow">Our proprietary checklist for preliminary site assessment. Covers zoning, utilities, and major risk categories.</p>
            <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Download PDF (TBD)
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 opacity-60 grayscale cursor-not-allowed">
            <h3 className="text-xl font-bold mb-3">Project Logic Guide</h3>
            <p className="text-slate-600 text-sm mb-8">Coming Soon: A strategic guide on aligning budget and schedule during pre-development.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Available Soon</span>
          </div>
        </div>

        <section className="mt-24 pt-24 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Navigating QSR Drive-Thru Permits", date: "TBD", excerpt: "How stacking requirements are changing across major metropolitan jurisdictions." },
              { title: "Medical Condo Subdivision Logic", date: "TBD", excerpt: "Balancing MEP flexibility with common-area cost allocation." }
            ].map((art, i) => (
              <article key={i} className="group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">{art.date}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{art.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{art.excerpt}</p>
                <span className="text-sm font-bold border-b border-slate-300 group-hover:border-blue-600 transition-colors">Read Article</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
