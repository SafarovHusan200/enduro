window.addEventListener("DOMContentLoaded", () => {
  const modal__parent = document.getElementById("modal__parent");
  const close__modal = document.getElementById("close__modal");
  const open__modal = document.getElementById("open__modal");

  open__modal.addEventListener("click", () => {
    modal__parent.classList.add("open");
  });

  close__modal.addEventListener("click", () => {
    modal__parent.classList.remove("open");
  });
});
