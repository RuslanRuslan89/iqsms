// Анимация элементов при скролле
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.animate');
  const windowHeight = window.innerHeight;

  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop - windowHeight < 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Подсветка активной ссылки
function setActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
// Анимация заголовков по буквам
function animateTitle() {
  const title = document.querySelector('.animated-title');
  if (!title) return;

  let html = '';
  for (let i = 0; i < title.textContent.length; i++) {
    html += `<span>${title.textContent[i]}</span>`;
  }
  title.innerHTML = html;

  // Анимация букв
  const spans = title.querySelectorAll('span');
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.animation = 'letterFadeIn 0.5s ease forwards';
    }, index * 100); // Задержка между буквами
  });
}

window.addEventListener('load', animateTitle);
