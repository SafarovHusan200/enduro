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

  // Swiper
  var swiper = new Swiper(".clientSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      console.log(panel.classList[1] === "show");
      if (panel.classList[1] === "show") {
        panel.classList.remove("show");
      } else {
        panel.classList.add("show");
      }
    });
  }
});
