// Efecto de scroll en la barra de navegación
const navbar = document.getElementById('barra-navegacion');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Si el scroll es mayor a 50px, se agrega la clase "scrolled"
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Botón para abrir/cerrar menú móvil
const mobileMenuBtn = document.getElementById('btnMenuMovil');
const mobileMenu = document.getElementById('menuMovil');

mobileMenuBtn.addEventListener('click', () => {
    // Alterna la clase "active" en el botón y en el menú
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Scroll suave hacia una sección específica
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Cierra el menú móvil si está abierto
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
}

// Cierra el menú móvil al hacer clic en un enlace de navegación
document.querySelectorAll('.menu-movil a, .enlaces-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const sectionId = href.replace('#', '');
        scrollToSection(sectionId);
    });
});

// Configuración del Intersection Observer para animaciones de aparición
const observerOptions = {
    threshold: 0.1, // porcentaje de visibilidad necesario
    rootMargin: '0px 0px -50px 0px' // margen para activar la animación
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el elemento entra en pantalla, se muestra con animación
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);