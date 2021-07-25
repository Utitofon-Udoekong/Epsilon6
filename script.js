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
    effect: 'coverflow',
    grabCursor: 'true',
    slidesPerView: auto,
    // centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifir: 2,
        slideShadows: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
