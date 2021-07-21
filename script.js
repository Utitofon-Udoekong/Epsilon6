const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    // spaceBetween: 50,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});