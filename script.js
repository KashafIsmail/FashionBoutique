
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle hamburger icon ↔ X
  if (navLinks.classList.contains('active')) {
    hamburger.innerHTML = '&times;'; // × icon
  } else {
    hamburger.innerHTML = '&#9776;'; // ≡ icon
  }
});
