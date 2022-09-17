const btns = document.querySelectorAll(".persone__container");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((f) => f.classList.remove("persone__active"));
    e.target.classList.toggle("persone__active");
  });
});
