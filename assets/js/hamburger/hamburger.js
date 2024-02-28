const hamburger = document.querySelector('.btn-hamburger');

function toggleHamburger() {
  const hamicon = document.querySelector('.hamicon');
  const closeicon = document.querySelector('.closeicon');

  hamicon.classList.toggle('d-none');
  closeicon.classList.toggle('d-none');
}

hamburger.addEventListener('click', toggleHamburger);