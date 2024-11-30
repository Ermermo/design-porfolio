const text = 'Olá, Mundo!';
    const element = document.querySelector('.typing');
    let i = 0;
    let isDeleting = false;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // Ajuste o tempo de espera para corresponder ao número de passos na animação
      } else {
        isDeleting = true;
        setTimeout(deleteText, 1000); // Aumenta o tempo de espera antes de apagar
      }
    }

    function deleteText() {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(deleteText, 50); // Ajuste o tempo de espera para corresponder ao número de passos na animação
      } else {
        isDeleting = false;
        setTimeout(type, 1000); // Aumenta o tempo de espera antes de digitar novamente
      }
    }
type();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function scrollToSection(elementId, duration = 1500) {
//   const element = document.getElementById(elementId);
//   if (element) {
//     const startingPosition = window.pageYOffset;
//     const targetPosition = element.offsetTop;
//     const distance = targetPosition - startingPosition;
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;   

//       const progress = currentTime - startTime;   

//       const easeInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - 8 * (x - 1) * (x - 1) * (x - 1) * (x - 1);
//       const easedProgress = easeInOutQuart(progress / duration);
//       window.scrollTo(0, startingPosition + distance * easedProgress);
//       if (progress < duration) {
//         requestAnimationFrame(animation);
//       }
//     }
//     requestAnimationFrame(animation);
//   }
// }

function scrollToSection(elementId, duration = 1500) {
  const element = document.getElementById(elementId);

  if (element) {
    const startingPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - 22; // Adjust target position by 20px
    const distance = targetPosition - startingPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;   


      const progress = currentTime - startTime;   


      const easeInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - 8 * (x - 1) * (x - 1) * (x - 1) * (x - 1);
      const easedProgress = easeInOutQuart(progress / duration);
      window.scrollTo(0, startingPosition + distance * easedProgress);

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx