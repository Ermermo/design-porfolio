$(document).ready(function() {
    $("#myButton").click(function() {
      $(".page-content").addClass("fade-out");
  
      setTimeout(function() {
        window.location.href = "nova_pagina.html";
      }, 1000); // Aguarda 1 segundo para a animação terminar
    });
  });

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const logotipoImage = document.querySelector('#svgrepo');

// Inicialmente, esconde a imagem e define o zoom
logotipoImage.style.transform = 'translateX(-100%) scale(0.8)';

// Adiciona as animações CSS
logotipoImage.classList.add('slideIn', 'float');

// Gatilho ao rolar a página (opcional)
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    logotipoImage.classList.add('slideIn', 'float');
  }
});