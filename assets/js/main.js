// Get DOM elements
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const closeMenu = document.querySelector('.close-menu');
const submenuToggles = document.querySelectorAll('.submenu-toggle');
const submenus = document.querySelectorAll('.submenu');

// Toggle dropdown menu with animation
menuToggle.addEventListener('click', function () {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  dropdownMenu.setAttribute('aria-hidden', isExpanded);

  dropdownMenu.classList.toggle('open');
});

// Close dropdown menu
closeMenu.addEventListener('click', function () {
  menuToggle.setAttribute('aria-expanded', 'false');
  dropdownMenu.setAttribute('aria-hidden', 'true');
  dropdownMenu.classList.remove('open');
});

// Toggle submenu and arrow
submenuToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);

    const submenu = submenus[index];
    submenu.style.display = isExpanded ? 'none' : 'block';

    const arrow = this.querySelector('.arrow');
    arrow.textContent = isExpanded ? '▼' : '▲';
  });
});