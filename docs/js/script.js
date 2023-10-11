// Función para manejar la animación cuando los elementos están en la vista
function handleScrollAnimation(entries, observer) {
    entries.forEach((entry) => {
        const event = entry.target;
        if (entry.isIntersecting) {
            // Elemento entra en la vista, aplica la animación
            event.querySelector('.timeline-date').style.opacity = 1;
            event.querySelector('.timeline-date').style.transform = 'translateY(0)';
            event.querySelector('.timeline-content').style.opacity = 1;
            event.querySelector('.timeline-content').style.transform = 'translateY(0)';
        } else {
            // Elemento sale de la vista, restablece la animación
            event.querySelector('.timeline-date').style.opacity = 0;
            event.querySelector('.timeline-date').style.transform = 'translateY(-20px)';
            event.querySelector('.timeline-content').style.opacity = 0;
            event.querySelector('.timeline-content').style.transform = 'translateY(20px)';
        }
    });
}

// Configurar el observador de intersección
const options = {
    root: null, // El viewport es el contenedor por defecto
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
};

const timelineEvents = document.querySelectorAll('.timeline-event');

const observer = new IntersectionObserver(handleScrollAnimation, options);

timelineEvents.forEach((event) => {
    observer.observe(event);
});

// Función para activar la animación de las barras de habilidades cuando se intersectan
function animateSkillsBars(entries, obs) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var skillBars = entry.target.querySelectorAll('.skillbar-bar');
            skillBars.forEach(function (bar) {
                var percent = bar.parentElement.getAttribute('data-percent');
                bar.style.width = percent;
            });
        } else {
            // Si se salen de la vista, resetea las barras
            var skillBars = entry.target.querySelectorAll('.skillbar-bar');
            skillBars.forEach(function (bar) {
                bar.style.width = '0%';
            });
        }
    });
}

// Configuración del observador de intersección
var option = {
    root: null, // Use el viewport como elemento raíz
    rootMargin: '0px',
    threshold: 0.1, // Cuando el 10% del elemento esté en la vista, activar la animación
};

// Crea el observador
var obs = new IntersectionObserver(animateSkillsBars, option);

// Observa las barras de habilidades
var skillBars = document.querySelectorAll('.skillbar');
skillBars.forEach(function (bar) {
    obs.observe(bar);
});


function mailto() {
    let asunto = document.getElementById("em-asunto").value;
    let texto = window.encodeURIComponent(document.getElementById("em-texto").value);
    window.location.href = `mailto:albertomsalvador@gmail.com?subject=${asunto}&body=${texto}`;
}