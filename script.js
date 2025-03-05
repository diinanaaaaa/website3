
function toggleMenu() {
    let nav = document.querySelector(".navigation");
    let toggle = document.querySelector(".menu-toggle");

    nav.classList.toggle("active");
    toggle.classList.toggle("open");

    if (nav.classList.contains("active")) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

