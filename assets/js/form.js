
/**
 * Eden Consultants - Form Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      console.log('Submitting...', new FormData(form));
      
      form.classList.add('hidden');
      success.classList.remove('hidden');
      
      // Scroll to success message
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
