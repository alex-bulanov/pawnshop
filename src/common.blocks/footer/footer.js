const navArrows = document.querySelectorAll('.footer__nav-arrow');

if (navArrows.length > 0) {
  navArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      arrow.parentElement.classList.toggle('footer__nav-item--active');
    });
  });
}
