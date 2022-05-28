window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  activateMenuAtCUrrentSection();
  showBackToTopButtonOnScroll();
}

function activateMenuAtCUrrentSection() {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a secção passou da linha
  // quais dados vou precisar ?
  const sectionTop = home.offsetTop;

  // Altura da secção
  const sectionHeight = home.offsetHeight;

  // O topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = 

  if (true) {
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header, 
  #services .card,
  #about,
  #about header, 
  #about .content,
  #about img
`);
