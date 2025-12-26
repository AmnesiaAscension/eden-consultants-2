
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Feasibility & Site Selection Support",
    includes: ["Site analysis", "Zoning verification", "Utility accessibility scan", "Topography & environmental risk overview"],
    deliverables: ["Feasibility Report", "Recommended Go/No-Go steps", "Preliminary Site Layout Input"]
  },
  {
    title: "Entitlements & Permitting Strategy",
    includes: ["Jurisdictional coordination", "Permit roadmap development", "Zoning hearing representation coordination", "Application oversight"],
    deliverables: ["Entitlement Timeline", "Risk Management Log", "Permit Status Dashboard"]
  },
  {
    title: "Consultant Team Coordination",
    includes: ["RFP management", "Architect/Civil/MEP bridging", "Design review for operational efficiency", "Project stakeholder meeting management"],
    deliverables: ["Consultant Responsibility Matrix", "Design Quality Review notes"]
  },
  {
    title: "Budget & Schedule Advisory",
    includes: ["Pre-pro-forma sanity check", "Critical path identification", "Market-rate assumption testing", "Contingency planning"],
    deliverables: ["Conceptual Budget Analysis", "Master Program Schedule"]
  },
  {
    title: "Owner Representation (Optional)",
    includes: ["Milestone tracking", "Change order review assistance", "Execution phase visibility", "Issue escalation support"],
    deliverables: ["Weekly Executive Summary", "Project Progress Reports"],
    isTbd: true
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1120px] mx-auto px-4">
        <header className="mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Capabilities</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Comprehensive Development Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl">Expert guidance from the moment you consider a site to the day you open for business.</p>
        </header>

        <div className="space-y-16">
          {services.map((s, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate-100 pb-16 last:border-0">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold mb-4">{s.title} {s.isTbd && <span className="text-xs bg-slate-100 text-slate-500 py-1 px-2 rounded-full uppercase ml-2 tracking-tighter">TBD</span>}</h2>
                <p className="text-slate-600">Specialized advisory services focused on ensuring project logic and risk mitigation.</p>
              </div>
              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-600">Includes</h3>
                <ul className="space-y-2">
                  {s.includes.map((inc, i) => (
                    <li key={i} className="text-slate-700 flex gap-2 text-sm font-medium">
                      <span className="text-blue-500">•</span> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-800">Deliverables</h3>
                <ul className="space-y-2">
                  {s.deliverables.map((del, i) => (
                    <li key={i} className="text-slate-800 flex gap-2 text-sm font-bold italic">
                      {del}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 p-12 bg-slate-900 rounded-2xl text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Engagement Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h3 className="font-bold mb-2">One-time Feasibility Consult</h3>
                <p className="text-xs text-slate-400">Perfect for preliminary site assessment.</p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h3 className="font-bold mb-2">Monthly Advisory Retainer</h3>
                <p className="text-xs text-slate-400">Continuous guidance throughout development.</p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h3 className="font-bold mb-2">Project-based Package</h3>
                <p className="text-xs text-slate-400">Customized scope for end-to-end support.</p>
              </div>
            </div>
            <Link to="/contact#discovery" className="inline-block mt-12 bg-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all">
              Request Pricing & Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
