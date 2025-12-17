const sections = document.querySelectorAll('.content');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
