
const links = document.querySelectorAll(".mainlist-link");

for(const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const gethref = this.getAttribute("href");
  const href = document.querySelector(gethref);
  const offsetTop = href.offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
  
  let closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]');
  closeCanvas.click();

  const hamicon = document.querySelector('.hamicon');
  const closeicon = document.querySelector('.closeicon');
  hamicon.classList.toggle('d-none');
  closeicon.classList.toggle('d-none');
}