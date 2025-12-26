
/**
 * Eden Consultants - Case Studies JS
 */

const DATA_PATH = './assets/data/case-studies.json';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('case-studies-grid');
  const featured = document.getElementById('featured-case-studies');
  const detail = document.getElementById('case-study-detail');

  if (grid) initCaseStudiesDirectory();
  if (featured) initFeaturedStudies();
  if (detail) initCaseStudyDetail();
});

async function fetchCaseStudies() {
  try {
    const res = await fetch(DATA_PATH);
    if (!res.ok) throw new Error('Failed to load studies');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

function createCard(study) {
  return `
    <a href="./case-study.html?id=${study.slug}" class="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 block transition-all hover:shadow-lg">
      <div class="aspect-video bg-slate-200 overflow-hidden relative">
        <img src="${study.image || 'https://picsum.photos/seed/'+study.slug+'/800/450'}" alt="${study.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute top-4 left-4">
          <span class="bg-slate-900/80 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider backdrop-blur-sm">
            ${study.industry}
          </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">${study.title}</h3>
        <p class="text-slate-600 text-xs mb-4 line-clamp-2 leading-relaxed">${study.overview}</p>
        <span class="text-blue-600 text-xs font-bold uppercase tracking-widest">Case Study &rarr;</span>
      </div>
    </a>
  `;
}

async function initFeaturedStudies() {
  const container = document.getElementById('featured-case-studies');
  const studies = await fetchCaseStudies();
  const top3 = studies.slice(0, 3);
  
  if (top3.length) {
    container.innerHTML = top3.map(createCard).join('');
  } else {
    container.innerHTML = '<p class="col-span-3 text-center text-slate-400 italic">No case studies available at this time.</p>';
  }
}

async function initCaseStudiesDirectory() {
  const grid = document.getElementById('case-studies-grid');
  const searchInput = document.getElementById('case-study-search');
  const chips = document.querySelectorAll('.filter-chip');
  const empty = document.getElementById('empty-state');
  
  const allStudies = await fetchCaseStudies();
  let filtered = [...allStudies];
  let activeFilter = 'All';
  let searchTerm = '';

  const render = () => {
    const results = filtered.filter(s => {
      const matchFilter = activeFilter === 'All' || s.industry === activeFilter;
      const matchSearch = s.title.toLowerCase().includes(searchTerm) || 
                         s.overview.toLowerCase().includes(searchTerm) ||
                         s.industry.toLowerCase().includes(searchTerm);
      return matchFilter && matchSearch;
    });

    if (results.length) {
      grid.innerHTML = results.map(createCard).join('');
      grid.classList.remove('hidden');
      empty.classList.add('hidden');
    } else {
      grid.classList.add('hidden');
      empty.classList.remove('hidden');
    }
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active', 'bg-blue-600', 'text-white'));
      chip.classList.add('active', 'bg-blue-600', 'text-white');
      activeFilter = chip.dataset.filter;
      render();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase();
    render();
  });

  render();
}

async function initCaseStudyDetail() {
  const container = document.getElementById('case-study-detail');
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('id');

  if (!slug) {
    container.innerHTML = `<div class="py-20 text-center"><h1 class="text-2xl font-bold mb-4">Project Not Found</h1><a href="./case-studies.html" class="text-blue-600 underline">Back to projects</a></div>`;
    return;
  }

  const allStudies = await fetchCaseStudies();
  const study = allStudies.find(s => s.slug === slug);

  if (!study) {
    container.innerHTML = `<div class="py-20 text-center"><h1 class="text-2xl font-bold mb-4">Project Profile Not Found</h1><a href="./case-studies.html" class="text-blue-600 underline">Back to projects</a></div>`;
    return;
  }

  document.title = `${study.title} | Eden Consultants`;

  container.innerHTML = `
    <section class="relative h-[50vh] min-h-[400px] flex items-end">
      <div class="absolute inset-0">
        <img src="${study.image || 'https://picsum.photos/seed/'+study.slug+'/1600/900'}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>
      <div class="max-w-[1120px] mx-auto px-4 w-full relative z-10 pb-16">
        <div class="max-w-3xl text-white">
          <span class="inline-block bg-blue-600 text-xs font-black px-3 py-1 rounded uppercase tracking-widest mb-4">${study.industry}</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">${study.title}</h1>
          <div class="flex flex-wrap gap-8 font-bold text-sm uppercase tracking-widest text-slate-200">
            <div><span class="text-slate-400 block mb-1">Location</span> ${study.location}</div>
            <div><span class="text-slate-400 block mb-1">Year</span> ${study.year}</div>
            ${study.timeline ? `<div><span class="text-slate-400 block mb-1">Timeline</span> ${study.timeline}</div>` : ''}
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-8">
          <h2 class="text-2xl font-bold mb-6">Overview</h2>
          <p class="text-xl text-slate-700 leading-relaxed mb-12">${study.overview}</p>
          
          <div class="space-y-12">
            <div>
              <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-black">1</span>
                What We Did
              </h3>
              <ul class="space-y-3">
                ${study.what_we_did.map(item => `<li class="bg-slate-50 p-4 rounded-lg border border-slate-100 font-medium">${item}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">2</span>
                Outcomes
              </h3>
              <ul class="space-y-3">
                ${study.outcomes.map(item => `<li class="bg-emerald-50 p-4 rounded-lg border border-emerald-100 font-bold text-emerald-900 italic">&ldquo;${item}&rdquo;</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4">
          <div class="sticky top-32 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 class="font-bold mb-4">Interested in results like these?</h4>
            <p class="text-sm text-slate-600 mb-8 leading-relaxed">Let's discuss how we can bring predictable success to your next development.</p>
            <a href="./contact.html#discovery" class="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Request Discovery</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
