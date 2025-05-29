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
