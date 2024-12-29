const start_btn = document.getElementById("start-btn");

start_btn.addEventListener('click', () => {
    const element = document.getElementById("skyline-section");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

const images = document.querySelector(".carousel-images");
const totalImages = images.children.length;
let currentIndex = 0;
let autoSlideInterval;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function updateCarousel() {
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextImage();
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

startAutoSlide();