// preloader
document.addEventListener("DOMContentLoaded", () =>
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    console.log("==========");
    preloader?.classList?.add("uk-hidden");
  }, 2500)
);
