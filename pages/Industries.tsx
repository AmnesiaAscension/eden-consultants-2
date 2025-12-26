
import React from 'react';

const industries = [
  {
    title: "Shopping Centers",
    focus: "Tenant mix planning, phasing, and large-scale site constraints.",
    points: ["Tenant mix + phasing", "Civil/site constraints", "Utility/access planning"]
  },
  {
    title: "Fast Food / QSR",
    focus: "High-impact scheduling and operational efficiency.",
    points: ["Drive-thru flow/stacking/access", "High-impact scheduling", "Brand standards coordination"]
  },
  {
    title: "Restaurants",
    focus: "MEP intensity and complex permitting requirements.",
    points: ["MEP intensity + kitchen", "Permitting complexity (hoods/grease/waste)", "Opening timeline alignment"]
  },
  {
    title: "Office Condos",
    focus: "Subdivision logic and repeatable site planning.",
    points: ["Subdivision/condo docs coordination (TBD)", "Common area/site planning", "Repeatable unit strategies"]
  },
  {
    title: "Medical Condos",
    focus: "Technical requirements and rapid physician fit-outs.",
    points: ["TI readiness", "MEP flexibility", "Schedule risk reduction for fit-out"]
  }
];

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-[1120px] mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Industries & Expertise</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">Specific development insights tailored to the unique demands of commercial sectors.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold mb-4">{ind.title}</h2>
              <p className="text-slate-600 mb-8 italic">"{ind.focus}"</p>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600">Focus Points</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {ind.points.map((p, i) => (
                    <li key={i} className="flex gap-3 items-center text-sm font-semibold text-slate-800">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
