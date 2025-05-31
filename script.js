const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    showSlide(current + 1);
  } else if (e.key === 'ArrowLeft') {
    showSlide(current - 1);
  }
});

// Supporto touch
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});

function handleGesture() {
  if (touchEndX < touchStartX - 50) {
    showSlide(current + 1); // swipe sinistra
  }
  if (touchEndX > touchStartX + 50) {
    showSlide(current - 1); // swipe destra
  }
}

/*

// Pulsanti visibili
document.getElementById('next').addEventListener('click', () => {
  showSlide(current + 1);
});

document.getElementById('prev').addEventListener('click', () => {
  showSlide(current - 1);
});

*/