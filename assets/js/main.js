
/**
 * Eden Consultants - Shared Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFooter();
});

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        toggle.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
      } else {
        menu.classList.add('hidden');
        toggle.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      }
    });
  }
}

function initFooter() {
  const footers = document.querySelectorAll('footer');
  const footerContent = `
    <div class="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-300">
      <div class="col-span-1 md:col-span-2 space-y-4">
        <div class="flex items-center gap-2 text-white font-bold uppercase tracking-widest">
          Eden Consultants
        </div>
        <p class="text-sm max-w-sm">Expert development consulting for commercial real estate. Navigating risk, permitting, and feasibility to ensure project success.</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="./services.html" class="hover:text-white">Services</a></li>
          <li><a href="./industries.html" class="hover:text-white">Industries</a></li>
          <li><a href="./case-studies.html" class="hover:text-white">Case Studies</a></li>
          <li><a href="./contact.html" class="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li>Phone: <a href="tel:TBD" class="hover:text-white">TBD</a></li>
          <li>Email: <a href="mailto:TBD" class="hover:text-white">TBD</a></li>
        </ul>
      </div>
    </div>
    <div class="max-w-[1120px] mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
      <p>&copy; ${new Date().getFullYear()} Eden Consultants. All rights reserved.</p>
      <div class="flex gap-4">
        <a href="./privacy.html" class="hover:text-white">Privacy Policy</a>
      </div>
    </div>
  `;
  footers.forEach(f => {
    if (f.innerHTML.trim() === '') f.innerHTML = footerContent;
  });
}
