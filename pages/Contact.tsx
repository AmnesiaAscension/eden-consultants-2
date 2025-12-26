
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project_type: 'Shopping Center',
    project_location: '',
    timeline: '',
    budget_range: '',
    message: '',
    honeypot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots
    
    // Simulate API call
    console.log('Form data:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="py-32 px-4 max-w-[1120px] mx-auto text-center">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 inline-block">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Request Received</h1>
          <p className="text-slate-600 text-lg max-w-md mx-auto">
            Thank you for reaching out. We will review your project details and contact you within 24-48 business hours to schedule a discovery call.
          </p>
          <button onClick={() => setSubmitted(false)} className="mt-8 font-bold text-blue-600 underline">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <header className="mb-12">
              <h1 className="text-4xl font-black mb-6">Get in Touch</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have a specific site in mind or just need a sounding board for your expansion plans, we're ready to help.
              </p>
            </header>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">Direct Line</h4>
                  <a href="tel:TBD" className="text-xl font-bold hover:text-blue-600 transition-colors">TBD</a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">Email Address</h4>
                  <a href="mailto:TBD" className="text-xl font-bold hover:text-blue-600 transition-colors">TBD</a>
                </div>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Discovery Call Expectations</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex gap-2"><span>&rarr;</span> Initial project logic sanity check</li>
                  <li className="flex gap-2"><span>&rarr;</span> High-level identification of potential pitfalls</li>
                  <li className="flex gap-2"><span>&rarr;</span> Review of Eden's advisory approach</li>
                  <li className="flex gap-2"><span>&rarr;</span> Next steps for a full feasibility scan</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div id="discovery" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">Request a Discovery Call</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden">
                  <input name="honeypot" value={formData.honeypot} onChange={handleChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number *</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Project Type</label>
                    <select name="project_type" value={formData.project_type} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                      <option>Shopping Center</option>
                      <option>QSR / Fast Food</option>
                      <option>Restaurant</option>
                      <option>Office Condo</option>
                      <option>Medical Condo</option>
                      <option>Other / Mixed Use</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Project Location</label>
                    <input name="project_location" value={formData.project_location} onChange={handleChange} placeholder="City, State" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Describe the project & goals</label>
                  <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Submit Discovery Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
