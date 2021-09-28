// Creacion de variables constantes para capturar las ids dentro del html
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');


// Mostrar el menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// ocultar el menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// Activar y remover menu
const navLink = document.querySelectorAll('.nav__link');
    // Activar links
    function linkAction() {
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
  
        /*Remove menu mobile*/
        navMenu.classList.remove('show')
    }

navLink.forEach(n => n.addEventListener('click', linkAction));