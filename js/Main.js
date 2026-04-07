// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Reveal on scroll 
const reveals = document.querySelectorAll('.reveal');

// Hacemos visibles todos por defecto primero (fallback)
reveals.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // 👈 fix principal

reveals.forEach(el => observer.observe(el));

// Form submit
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-enviar');
    btn.textContent = '¡Consulta enviada!';
    btn.style.background = 'rgba(184,151,58,0.2)';
    setTimeout(() => {
        btn.textContent = 'Enviar consulta';
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}

// Slider vinos
let sliderIndex = 0;
const totalVinos = 4;
const vinosPerView = 3;
const maxIndex = totalVinos - vinosPerView;

function moverSlider(dir) {
    sliderIndex = Math.max(0, Math.min(sliderIndex + dir, maxIndex));
    const grid = document.getElementById('vinosGrid');
    const cardWidth = grid.querySelector('.vino-card').offsetWidth;
    grid.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
}