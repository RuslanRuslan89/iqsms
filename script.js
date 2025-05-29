// Простой скрипт для формы регистрации
document.querySelector('.reg-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Спасибо! На ваш номер отправлено подтверждение.");
});
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

// Обновление активного пункта меню
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
