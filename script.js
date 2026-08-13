// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// ===============================
// MOBILE MENU
// ===============================

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

  navLinks.classList.toggle("mobile");

  if (navLinks.classList.contains("mobile")) {

    toggle.textContent = "×";

  } else {

    toggle.textContent = "☰";

  }

});


// ===============================
// CLOSE MOBILE MENU
// ===============================

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("mobile");

      toggle.textContent = "☰";

    });

  });


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


// ===============================
// PRODUCT HEART
// ===============================

const hearts =
  document.querySelectorAll(".product-info > div span");

hearts.forEach(heart => {

  heart.style.cursor = "pointer";

  heart.addEventListener("click", () => {

    if (heart.textContent === "♡") {

      heart.textContent = "♥";

      heart.style.color = "#d7869d";

    } else {

      heart.textContent = "♡";

      heart.style.color = "";

    }

  });

});
