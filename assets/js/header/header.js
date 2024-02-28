const headerEl = document.querySelector('#header');

const fixedHeader = (e) => {
  e.preventDefault();
  const scrollHeight = window.scrollY;
  const viewHeight = window.innerHeight * 1;

  if(scrollHeight > viewHeight) {
    headerEl.classList.add('header-fixed');
  } else if(scrollHeight < viewHeight) {
    headerEl.classList.remove('header-fixed');
  }
}

window.addEventListener('scroll', fixedHeader);