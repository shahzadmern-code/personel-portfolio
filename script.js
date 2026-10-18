
// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.textContent = isOpen ? "X" : "☰";
    });

    // Close menu after selecting a section
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "☰";
        });
    });
}

// Update copyright year automatically
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
