function parallax() {
  let parallaxes = document.querySelectorAll(".parallax");

  for (let parallax of parallaxes) {
    let windowHeight = window.innerHeight;
    let elementTop = parallax.getBoundingClientRect().top;
    let elementVisible = 10;

    if (elementTop < (windowHeight - elementVisible)) {
      parallax.classList.add("active");
    } else {
      parallax.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", parallax);