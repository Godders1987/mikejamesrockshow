// Smooth scrolling effect
$(".nav a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top,
    }),
      800;
  }
});

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainNavLinkEl = document.querySelector(".main-nav-list");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

mainNavLinkEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
