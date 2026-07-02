document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const openBtn = document.querySelector("header > .btn");
    const closeBtn = document.querySelector(".menu .btn");
    const menuLinks = document.querySelectorAll(".menu a");

    // Abrir menú lateral móvil
    if (openBtn && menu) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("show");
        });
    }

    // Cerrar menú lateral móvil
    if (closeBtn && menu) {
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    }

    // Cerrar menú al hacer clic en un enlace y marcar activo
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
            
            menuLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
});