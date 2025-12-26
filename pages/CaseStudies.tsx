
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy, IndustryType } from '../types';

const industries = ["All", ...Object.values(IndustryType)];

const CaseStudies: React.FC = () => {
  const [allCases, setAllCases] = useState<CaseStudy[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/case-studies.json')
      .then(res => res.json())
      .then(data => {
        setAllCases(data as CaseStudy[]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading case studies:', err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    return allCases.filter(cs => {
      const matchesFilter = filter === "All" || cs.industry === filter;
      const matchesSearch = cs.title.toLowerCase().includes(search.toLowerCase()) || 
                          cs.industry.toLowerCase().includes(search.toLowerCase()) ||
                          cs.location.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search, allCases]);

  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="max-w-[1120px] mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Case Studies & Outcomes</h1>
          <p className="text-slate-600">Demonstrated credibility through real-world commercial outcomes.</p>
        </header>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === ind 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by project type, city, or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-32">
            <p className="text-slate-500 italic">Loading case studies...</p>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(cs => (
              <Link key={cs.slug} to={`/case-study?id=${cs.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 block hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-blue-600 px-2 py-0.5 rounded mb-1 inline-block">
                      {cs.industry}
                    </span>
                    <h3 className="font-bold text-lg leading-tight">{cs.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {cs.overview}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-xl font-bold text-slate-400">No projects found matching your criteria.</h3>
            <button onClick={() => {setFilter("All"); setSearch("");}} className="mt-4 text-blue-600 font-bold underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
