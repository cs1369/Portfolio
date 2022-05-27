let li = document.querySelectorAll(".nav__menu-items");
let menu= document.querySelector(".nav__iconMenu");

menu.addEventListener("click",()=>{
    for(let lista of li){
        lista.classList.toggle("animaciones-nav");
    }
});