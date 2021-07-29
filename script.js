const navTags = document.querySelectorAll(".nav-wrapper ul li a");
const navWrapper = document.querySelector(".nav-wrapper");
const hamburger = document.querySelector(".nav-btn")
navTags.forEach(tag => {
    tag.addEventListener("click", () => {
        navWrapper.classList.remove("active");
        hamburger.classList.remove("active")
    })
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navWrapper.classList.toggle("active");
})




// const cursor = document.querySelector(".cursor")
// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true
  });

  const str = "adam"
  const rts = window.btoa(str);
  const evev = window.atob(rts)
  console.log(rts)
  console.log(evev)
