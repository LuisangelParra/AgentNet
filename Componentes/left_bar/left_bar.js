document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            menuItems.forEach(function (menuItem) {
                menuItem.classList.remove("seleccionado");
            });
            item.classList.add("seleccionado");
        });
    });
});