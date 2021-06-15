const footerNavLinks = document.querySelectorAll('.footer__nav-link');

footerNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.target.classList.contains('footer__nav-link--arrow')) {
      event.preventDefault();
      link.parentElement.classList.toggle('footer__nav-item--active');
    }
  });
});
