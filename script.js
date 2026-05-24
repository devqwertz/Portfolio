const fullText = "@ Qwertz";
let indexText = 0;
const typewriteText = "front-end developer";
const elementTypeWrite = document.getElementById("typewrite");
let indexTypeWrite = 0;
const navbar = document.querySelector(".navbar");
const aboutSection = document.querySelector("#about");
const homeSection = document.getElementById("home")

function animateTitle() {
    indexText++;

    if (indexText > fullText.length) {
        indexText = 1;
    }

    document.title = fullText.substring(0, indexText);
}

setInterval(animateTitle, 700);

function typeWrite() {
    if (indexTypeWrite < typewriteText.length) {
        elementTypeWrite.textContent += typewriteText.charAt(indexTypeWrite);
        indexTypeWrite++;
        setTimeout(typeWrite, 80);
    }
}

typeWrite();

  const sections = document.querySelectorAll('section');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('visible');
      } else {
        if (window.scrollY < aboutSection.offsetTop) {
          navbar.classList.remove('visible');
        }
      }
    });
  }, options);

  observer.observe(aboutSection);

  const sectionObserver = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
