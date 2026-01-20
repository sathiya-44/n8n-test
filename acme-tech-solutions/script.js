console.log("Loaded Acme Tech Solutions website");

(function(){
  const contactEmail = "info@acmetech.com";
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');

  if (!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = (form.elements['name'] || {}).value || '';
    const email = (form.elements['email'] || {}).value || '';
    const message = (form.elements['message'] || {}).value || '';

    const subject = encodeURIComponent('Website inquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

    // Try to open user's mail client with a prefilled message
    window.location.href = 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body;

    // Fallback note in case mail client doesn't open immediately
    if (note) {
      note.textContent = 'If your email client did not open, please send a message to ' + contactEmail + '.';
    }
  });
})();
