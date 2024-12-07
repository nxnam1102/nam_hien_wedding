// preloader

document.addEventListener(
  "DOMContentLoaded",

  setTimeout(function pre() {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("uk-hidden");
  }, 500)
);
