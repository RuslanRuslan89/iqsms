const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const interval = setInterval(() => {
    count += Math.ceil(target / 100);
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    counter.textContent = count.toLocaleString();
  }, 20);
});
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.querySelector('.hero-wave-bg').style.transform = `translateX(${x * 20}px) translateY(${y * 10}px)`;
});
