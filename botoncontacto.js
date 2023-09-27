const menunav = document.getElementById("menunav")
const menuhide = document.getElementById("menuhide")

function togglemenu() {
    menuhide.classList.toggle('oculto')
}

menunav.addEventListener("click", togglemenu);
