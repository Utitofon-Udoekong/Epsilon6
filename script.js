const navTags = document.querySelectorAll(".nav-wrapper ul li a");
const navWrapper = document.querySelector(".nav-wrapper");
const chechBox = document.getElementById("nav")
navTags.forEach(tag => {
    tag.addEventListener("click", () => {
        console.log(chechBox)
    })
})
console.log(navTags);
console.log(chechBox)
const nam = -1
console.log(Number.isInteger(nam))


// const cursor = document.querySelector(".cursor")
// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    // spaceBetween: 50,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
