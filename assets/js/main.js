/* MENU */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toggleMenu);

/* fechando o menu ao clique */

const ul = document.querySelector('#nav ul');
const ulElements = ul.querySelectorAll('li');

ulElements.forEach((element) => {
    element.addEventListener('click', () => {
        toggleMenu(); 
    });
});

/* ANIMATION */

const targets = document.querySelectorAll('[data-animated]');
const animationClass = 'animate';

function animateElements() {
  const windowTop = window.scrollY + window.innerHeight * 0.75;

  targets.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    if (windowTop > elementTop) {
      element.classList.add(animationClass);
    }
  });
}

animateElements();

if (targets.length > 0) {
  window.addEventListener('scroll', animateElements);
}