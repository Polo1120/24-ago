
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


// Generador de corazones flotantes de fondo
function crearCorazonFlotante() {
  const container = document.getElementById("heartsContainer");
  if (!container) return;

  const heart = document.createElement("div");
  heart.className = "floating-heart";
  
  // Variedad de emojis de corazones y destellos
  const emojis = ["❤️", "💖", "💕", "💗", "✨"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  heart.innerHTML = randomEmoji;

  // Variaciones aleatorias
  const size = Math.random() * 20 + 12; // Entre 12px y 32px
  const startX = Math.random() * 100; // Entre 0% y 100% de la pantalla
  const drift = (Math.random() - 0.5) * 120; // Desplazamiento horizontal (-60px a 60px)
  const rotation = (Math.random() - 0.5) * 90; // Rotación (-45deg a 45deg)
  const duration = Math.random() * 6 + 6; // Duración (entre 6s y 12s)
  const maxOpacity = Math.random() * 0.35 + 0.15; // Opacidad máxima entre 0.15 y 0.50

  heart.style.left = `${startX}%`;
  heart.style.setProperty("--heart-size", `${size}px`);
  heart.style.setProperty("--duration", `${duration}s`);
  heart.style.setProperty("--drift", `${drift}px`);
  heart.style.setProperty("--rotation", `${rotation}deg`);
  heart.style.setProperty("--max-opacity", maxOpacity);

  container.appendChild(heart);

  // Eliminar el elemento al finalizar la animación para optimizar rendimiento
  setTimeout(() => {
    heart.remove();
  }, duration * 1000 + 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  
  typeWriter();
  
 
  startQuickCarousel();

  
  dispararConfeti();


  setInterval(dispararConfeti, 2000);

  // Iniciar la generación de corazones de fondo
  setInterval(crearCorazonFlotante, 400);

  // Generar corazones iniciales dispersos
  for (let i = 0; i < 15; i++) {
    setTimeout(crearCorazonFlotante, Math.random() * 5000);
  }
});