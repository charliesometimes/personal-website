var aboutMeModalState = false;
var contactModalState = false;
var aboutMeModal = document.querySelector("div#about-me");
var contactModal = document.querySelector("div#contact");

function toggleAboutMeModal() {
    if (aboutMeModalState) {
        aboutMeModalState = false;
        aboutMeModal.style.top = "-100vh";
    } else {
        contactModalState = false;
        contactModal.style.top = "-100vh";
        aboutMeModalState = true;
        aboutMeModal.style.top = "0vh";
    }
}

function toggleContactModal() {
    if (contactModalState) {
        aboutMeModalState = false;
        aboutMeModal.style.top = "-100vh";
        contactModalState = false;
        contactModal.style.top = "-100vh";
    } else {
        contactModalState = true;
        contactModal.style.top = "0vh";
    }
}
