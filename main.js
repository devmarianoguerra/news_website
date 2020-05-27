document.querySelector(".menu_btn").addEventListener("click", () => {
  document.querySelector(".nav_menu_left").classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news_cards", { delay: 500 });
ScrollReveal().reveal(".banner_one", { delay: 500 });
ScrollReveal().reveal(".banner_two", { delay: 500 });
ScrollReveal().reveal(".socialmedia", { delay: 500 });
ScrollReveal().reveal(".footer_info", { delay: 500 });
ScrollReveal().reveal(".footer", { delay: 500 });
