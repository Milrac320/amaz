// Ano atual
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

mobileToggle.addEventListener('click', function () {
  const isOpen = mainNav.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', isOpen);
});

// Fechar menu ao clicar em um link
mainNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ acordeão
document.querySelectorAll('.faq-item').forEach(function (item) {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', function () {
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

// Modal da galeria
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('galleryModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

galleryItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var img = item.querySelector('img');
    var label = item.getAttribute('data-label') || '';
    modalBody.innerHTML = '';
    if (img) {
      var modalImg = document.createElement('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalBody.appendChild(modalImg);
    }
    if (label) {
      var labelEl = document.createElement('div');
      labelEl.className = 'modal-label';
      labelEl.textContent = label;
      modalBody.appendChild(labelEl);
    }
    galleryModal.classList.add('open');
  });
});

modalClose.addEventListener('click', function () {
  galleryModal.classList.remove('open');
});

galleryModal.addEventListener('click', function (e) {
  if (e.target === galleryModal) {
    galleryModal.classList.remove('open');
  }
});
