/* MENU */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/* ANIMATION */

const targets = document.querySelectorAll('[data-animated]');

function animateElements() {
  const animationClass = 'animate';
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;

  targets.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (targets.length > 0) {
  window.addEventListener('scroll', animateElements);
}