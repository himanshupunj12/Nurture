// change copyright year to current year
document.querySelector(".current-year").textContent = new Date().getFullYear();

// mobo nav
const navBtnDOM = document.querySelector(".btn-mobile-nav");
const headerDOM = document.querySelector(".header");
navBtnDOM.addEventListener("click", function () {
  headerDOM.classList.toggle("nav-main-open");
});

// smooth scrolling (safari)
const allLinksDOM = document.querySelectorAll("a:link");
allLinksDOM.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-main-btn"))
      headerDOM.classList.toggle("nav-main-open");
  });
});

// sticky menu
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
