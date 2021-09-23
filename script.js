// Nav Section
function navMobile() {
    const navBtn = document.querySelector(".mobile-icon-container");
    let menuOpen = false;

    navBtn.addEventListener("click", () => {
        if (!menuOpen) {
            navBtn.classList.add("open");
            menuOpen = true;
            $(".mobile-nav-container").css("left", "0");
        } else {
            navBtn.classList.remove("open");
            menuOpen = false;
            $(".mobile-nav-container").css("left", "-200px");
        }
    })
}
navMobile();