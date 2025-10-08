// Starfield animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let w, h;

function initStars() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.2 + 0.05,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  stars.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > h) s.y = 0;
  });
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", initStars);
initStars();
drawStars();

// Dynamic hero phrase rotation
const phrases = ["Script Provider", "Auto farm", "Fish It Script"]; // cycling phrases
let phraseIndex = 0;
const phraseEl = document.getElementById("dynamic-phrase");

function rotatePhrase() {
  if (!phraseEl) return;
  // fade out
  phraseEl.classList.add("fade-out");
  phraseEl.classList.remove("fade-in");
  setTimeout(() => {
    // change text
    phraseIndex = (phraseIndex + 1) % phrases.length;
    phraseEl.textContent = phrases[phraseIndex];
    // fade in
    phraseEl.classList.remove("fade-out");
    phraseEl.classList.add("fade-in");
  }, 400); // wait for fade-out before swapping
}

// start with fade-in class to ensure smooth first appearance
if (phraseEl) phraseEl.classList.add("fade-in");
setInterval(rotatePhrase, 2000);

// Make all FAQ items open and non-toggleable
document.addEventListener('DOMContentLoaded', () => {
  const faqList = document.querySelector('.faq-list');
  if (!faqList) return;

  const details = Array.from(faqList.querySelectorAll('details'));
  // ensure all are open and visible
  details.forEach(d => {
    d.setAttribute('open', '');
    const body = d.querySelector('.faq-body');
    if (body) {
      body.style.display = 'block';
      body.style.height = 'auto';
      body.style.opacity = '1';
      body.style.transition = 'none';
    }
    const summary = d.querySelector('summary');
    if (summary) {
      summary.style.pointerEvents = 'none';
      summary.style.cursor = 'default';
    }
  });

  // keep container height stable (set to current height)
  faqList.style.minHeight = faqList.scrollHeight + 'px';
});
