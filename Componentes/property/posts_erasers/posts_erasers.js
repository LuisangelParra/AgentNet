function openPage(pageName, elmnt, color) {
    // Oculta todos los elementos con class "tabcontent"
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Elimina el fondo de color de todos los botones/tablinks
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(pageName).style.display = "block";

    // Añade el color específico al botón que abre el contenido de la pestaña
    elmnt.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function () {
    const tabPublicados = document.getElementById("tabPublicados");
    const tabBorradores = document.getElementById("tabBorradores");

    tabPublicados.onclick = function () {
        openPage('Publicados', tabPublicados, 'color_que_deseas_para_publicados');
    }

    tabBorradores.onclick = function () {
        openPage('Borradores', tabBorradores, 'color_que_deseas_para_borradores');
    }

    tabPublicados.click();
});