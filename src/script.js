
const textoMensaje = "¡Feliz cumpleaños, mi amor! 🎂❤️ Gracias por llenar mis días de sonrisas, ternura y momentos mágicos. Cada día a tu lado es mi regalo favorito. ¡Que este nuevo año de vida esté lleno de sueños cumplidos y muchísima felicidad! Te amo mucho. 💕✨";

let index = 0;
const speed = 40; 


let currentSlide = 0;
const slideIntervalTime = 1800; 

function startQuickCarousel() {
  const slides = document.querySelectorAll(".carousel-item");
  if (slides.length === 0) return;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, slideIntervalTime);
}


function typeWriter() {
  const container = document.getElementById("typingMessage");
  if (container && index < textoMensaje.length) {
    container.innerHTML += textoMensaje.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
   
    const photoContainer = document.getElementById("photoContainer");
    if (photoContainer) {
      photoContainer.classList.remove("hidden");
    }
  }
}


function dispararConfeti() {
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }


  confetti(Object.assign({}, defaults, { 
    particleCount: 60, 
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    colors: ['#ff4b82', '#ff7597', '#ffffff', '#ffd1dc']
  }));
  

  confetti(Object.assign({}, defaults, { 
    particleCount: 60, 
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    colors: ['#ff4b82', '#ff7597', '#ffffff', '#ffd1dc']
  }));
}


document.addEventListener("DOMContentLoaded", () => {
  
  typeWriter();
  
 
  startQuickCarousel();

  
  dispararConfeti();


  setInterval(dispararConfeti, 2000);
});