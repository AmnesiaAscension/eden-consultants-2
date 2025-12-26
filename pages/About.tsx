
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
              Guidance for Those Who Build.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Eden Consultants was founded on a simple premise: commercial real estate development is too capital-intensive to be navigated without professional logic checks and risk mitigation strategies.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              We help developers, franchisees, and property groups bridge the gap between initial concept and successful execution by acting as the technical "eyes and ears" of the owner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">How We Work</h2>
              <p className="text-slate-600 mb-8">
                Communication is the backbone of our success. We maintain a high cadence of reporting and issue escalation, ensuring you're never surprised by a missed milestone or a site constraint.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Predictability", desc: "Setting realistic expectations for schedule and budget from day one." },
                  { title: "Risk Reduction", desc: "Identifying site and entitlement risks before you commit millions." },
                  { title: "Deliverables", desc: "Focusing on tangible reports and dashboards that drive decisions." }
                ].map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold text-xs mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{v.title}</h4>
                      <p className="text-sm text-slate-500">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-slate-900 rounded-3xl p-12 text-white h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg width="120" height="120" viewBox="0 0 40 40" fill="white"><path d="M12 28V12H28V15H15V28H12Z"/><path d="M18 28V18H28V21H21V28H18Z"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">Experience Summary</h3>
                <p className="text-slate-400 mb-6 italic leading-relaxed">
                  "Our team brings together experts in site selection, entitlement navigation, and owner representation. We understand the specific friction points that delay commercial projects and have built a process to eliminate them."
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="font-bold text-blue-400">TBD</p>
                  <p className="text-sm text-slate-500">Principal Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "At what stage should I contact Eden?", a: "Ideally, during site selection or immediately after a site is identified, before full consultant teams are engaged." },
              { q: "Do you handle construction?", a: "We provide owner representation and execution support, which focuses on oversight, milestone tracking, and issue escalation rather than direct construction." },
              { q: "What jurisdictions do you work in?", a: "Service area is currently TBD. We focus on regions where we can provide the highest level of jurisdictional familiarity." }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-200 group overflow-hidden">
                <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center group-open:bg-slate-50 transition-colors">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">&darr;</span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
