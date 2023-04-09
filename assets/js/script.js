const addEventOnElement = function (element, evetType, callback) {
  for (let i = 0, len = element.length; i < len; i++) {
    element[i].addEventListener(evetType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// parallax effect

const parallaxElement = document.querySelector("[data-parallax]");
window.addEventListener("mousemove", (e) => {
  for (let i = 0, len = parallaxElement.length; i < len; i++) {
    const movementX =
      (e.clientX / window.innerWidth) *
      Number(parallaxElement[i].dataset.parallaxSpeed);
    const movementY =
      (e.clientY / window.innerHeight) *
      Number(parallaxElement[i].dataset.parallaxSpeed);

    parallaxElement[i].animate(
      {
        transform: `translate(${movementX}px, ${movementY}px)`,
      },
      { duration: 500, fill: "forwards" }
    );
  }
});
