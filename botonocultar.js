const botonmenu=document.getElementById("botonmenu")
const menuOcultable=document.getElementById("menuOcultable")

function togglemenu() {
    menuOcultable.classList.toggle('hidden')
}

botonmenu.addEventListener("click",togglemenu);
