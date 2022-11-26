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

// Make mobile navigatiion work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
