// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     if (entry.isIntersecting) {
//       console.log('Element is in view:', entry.target);
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const section = document.querySelectorAll('section');
// section.forEach((el)=> observer.observe(el));

const observer = new IntersectionObserver((entries) => {
  const lastElement = entries[0];
  if (lastElement.isIntersecting) {
    loadNewElement();
    observer.unobserve(lastElement.target);
  }
}, {});