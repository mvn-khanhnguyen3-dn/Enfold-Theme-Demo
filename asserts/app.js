const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

document.addEventListener("scroll", (e) => {
  //   console.log(window.scrollY);
  const btn = document.querySelector(".btn-scroll");
  const header = document.querySelector(".page-header");
  if (window.scrollY > 0) {
    header.classList.add("page-header-sm");
  } else {
    header.classList.remove("page-header-sm");
  }
  if (window.scrollY > 630) {
    btn.style.opacity = 1;
    btn.style.visibility = "visible";
  } else {
    btn.style.opacity = 0;
    btn.style.visibility = "hidden";
  }
});

document.querySelector(".btn-scroll").addEventListener("click", () => {
  scrollToTop();
});
