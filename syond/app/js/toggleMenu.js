const toggleMenu = () => {
    const openMenuId = document.querySelector("#open-menu");
    const closeMenuId = document.querySelector("#close-menu");
    const menuContainerClass = document.querySelector(".menu-container");
    const menuLinks = document.querySelectorAll(".menu-container li a");

    (function onLoad() {
        closeMenuId.classList.toggle("toggle-menu-display-none");
    }());

    openMenuId.addEventListener("click", () => {
        menuContainerClass.classList.toggle("toggle-menu-container");
        openMenuId.classList.toggle("toggle-menu-display-none");
        closeMenuId.classList.toggle("toggle-menu-display-none");

    });

    closeMenuId.addEventListener("click", () => {
        menuContainerClass.classList.toggle("toggle-menu-container");
        openMenuId.classList.toggle("toggle-menu-display-none");
        closeMenuId.classList.toggle("toggle-menu-display-none");
    });

    let closeMenuAfterClickOnLink = () => {
        for (let x = 0; menuLinks.length > x; x++) {
            menuLinks[x].addEventListener("click", () => {
                menuContainerClass.classList.toggle("toggle-menu-container");
                openMenuId.classList.toggle("toggle-menu-display-none");
                closeMenuId.classList.toggle("toggle-menu-display-none");
            });
        }
    }

    closeMenuAfterClickOnLink();
}

export default toggleMenu;