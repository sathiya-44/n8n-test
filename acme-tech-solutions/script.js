console.log("Loaded Acme Tech Solutions website");

document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple contact form handling (no external requests)
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        feedback.textContent = 'Please fill out all fields.';
        feedback.style.color = '#D14343';
        return;
      }

      // Simulate success
      feedback.style.color = '';
      feedback.textContent = 'Thanks, ' + (name.split(' ')[0] || name) + '! Your message has been received.';
      form.reset();

      // Optionally open user's mail client as an alternative
      // window.location.href = 'mailto:info@acmetech.com?subject=' + encodeURIComponent('Contact from ' + name) + '&body=' + encodeURIComponent(message);
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
