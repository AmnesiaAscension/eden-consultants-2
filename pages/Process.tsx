
import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    name: "Discovery",
    detail: "We start by clarifying your goals, timeline, and budget assumptions. This phase identifies decision-makers, stakeholders, and initial project vision to ensure alignment."
  },
  {
    id: 2,
    name: "Feasibility",
    detail: "A thorough site constraints scan. We provide a risk list and recommended next moves, evaluating zoning, utilities, and physical limitations before you commit capital."
  },
  {
    id: 3,
    name: "Planning & Entitlements",
    detail: "The development of a permitting roadmap and consultant coordination plan. We manage the high-level strategy for securing necessary approvals."
  },
  {
    id: 4,
    name: "Budget/Schedule Alignment",
    detail: "Rigorous clarity on budget assumptions and a master schedule logic sanity check to prevent early missteps from snowballing later."
  },
  {
    id: 5,
    name: "Execution Support",
    detail: "Providing owner-side visibility, issue escalation, and milestone tracking. We act as your technical eyes and ears as the project moves into high gear."
  }
];

const Process: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1120px] mx-auto px-4">
        <header className="mb-20 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-6">Our 5-Step Process</h1>
          <p className="text-lg text-slate-600">A systematic approach to navigating the complexities of commercial real estate development.</p>
        </header>

        <div className="relative space-y-12">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-[2.4rem] top-0 bottom-0 w-0.5 bg-slate-100"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black z-10 shadow-lg shadow-blue-200">
                {step.id}
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex-grow">
                <h2 className="text-2xl font-bold mb-4">{step.name}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact#discovery" className="inline-block bg-blue-600 text-white font-bold px-10 py-5 rounded-xl hover:bg-blue-700 transition-all shadow-lg">
            Start the Discovery Phase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Process;
