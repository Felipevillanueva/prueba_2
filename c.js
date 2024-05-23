    // JavaScript para el funcionamiento del carrusel custom
    const slideContainer = document.querySelector('.slide');
    const slides = document.querySelectorAll('.item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    showSlide(currentSlide);

     // JavaScript para activar las validaciones de Bootstrap y redirigir al enlace especificado
     (function () {
        'use strict';
        var form = document.getElementById('registrationForm');
        form.addEventListener('submit', function (event) {
          var password = document.getElementById('password');
          var confirmPassword = document.getElementById('confirmPassword');
          
          if (!form.checkValidity() || password.value.length < 8) {
            event.preventDefault();
            event.stopPropagation();
            
            if (password.value.length < 8) {
              password.classList.add('is-invalid');
              password.nextElementSibling.textContent = 'Por favor, introduce una contraseña de al menos 8 caracteres.';
            } else {
              password.classList.remove('is-invalid');
            }
  
            form.classList.add('was-validated');
          } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            // Redirigir al enlace especificado
            window.location.href = 'file:///C:/Users/felip/OneDrive/Desktop/actividad%204/prueba1%20de%20felipe%20villanueva.html';
          }
        }, false);
      })();

      // script.js

// Incluye jQuery desde un CDN
document.write('<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>');



$(document).ready(function() {
    // Tu código jQuery aquí
    $('#myButton').click(function() {
      alert('¡Haz hecho clic en el botón!');
    });
  });
