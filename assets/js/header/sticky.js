const headerEl = document.querySelector('#header');
const scrollOffset = headerEl.offsetTop;

function stickyHeader() {
  const scrollHeight = window.scrollY;
  const viewHeight = window.innerHeight * 1;

  if(scrollHeight > viewHeight) {
    headerEl.classList.add('sticky-header');
  } else if(scrollHeight < viewHeight) {
    headerEl.classList.remove('sticky-header');
  }
}

window.addEventListener('scroll', stickyHeader);
