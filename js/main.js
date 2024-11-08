const mode = document.getElementById('mode');
const modeIcon = mode.querySelector('i');
const body = document.querySelector('body');

// Función para cargar el tema del almacenamiento local
function loadTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    
    if (isDark) {
        body.classList.add("dark");
        modeIcon.classList.remove("ri-sun-line");
        modeIcon.classList.add("ri-moon-line");
    } else {
        body.classList.remove("dark");
        modeIcon.classList.remove("ri-moon-line");
        modeIcon.classList.add("ri-sun-line");
    }
}

// Al hacer clic en el botón, cambiar el tema y guardar el estado
mode.addEventListener("click", () => {
    const isDark = body.classList.contains("dark");

    if (isDark) {
        modeIcon.classList.remove("ri-moon-line");
        modeIcon.classList.add("ri-sun-line");
        body.classList.remove("dark");
        localStorage.setItem("theme", "light"); // Guardar el tema claro
    } else {
        modeIcon.classList.remove("ri-sun-line");
        modeIcon.classList.add("ri-moon-line");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark"); // Guardar el tema oscuro
    }
});

// Cargar el tema al cargar la página
loadTheme();


const testimonials = document.querySelectorAll('.card_testimonial');
let currentIndex = 0;

function showNextTestimonial() {
    // Ocultar todas las tarjetas
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = '0';
        testimonial.style.zIndex = '0';
    });
  
    testimonials[currentIndex].style.opacity = '1';
    testimonials[currentIndex].style.zIndex = '1';

    currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(showNextTestimonial, 4000);

showNextTestimonial();
