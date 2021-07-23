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
    slidesPerView: 4,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
