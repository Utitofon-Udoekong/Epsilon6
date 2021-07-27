window.onload = function () {
    emailjs.init("user_nPxcTVCOpmiJntdhkfeU2");
    
    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('Contact_Service', 'contact_form', this)
        .then(function () {
            console.log('SUCCESS!');
            modal.classList.add("active")
        }, function (error) {
            console.log('FAILED...', error);
        });
    });
}

const modal = document.querySelector(".modal")

const homeButton = document.getElementById("homeButton");
const closeModal = document.querySelector(".close-button");
homeButton.addEventListener("click", () => {
    window.history.back();
})
closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
})