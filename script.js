const observer = new IntersectionObserver((entries) => {
  const lastElement = entries[0];
  if (lastElement.isIntersecting) {
    loadNewElement();
    observer.unobserve(lastElement.target);
  }
}, {});

const section = document.querySelectorAll('section');
section.forEach((el)=> observer.observe(el));
