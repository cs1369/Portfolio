let li = document.querySelectorAll(".nav__menu-items");
let menu= document.querySelector(".nav__iconMenu");
let nav__menu = document.querySelector(".nav__menuH0");
const btnskills = document.querySelector(".skills__sobreMi");


menu.addEventListener("click",()=>{
    if(nav__menu.classList.contains("nav__menuH0")){
        nav__menu.classList.remove("nav__menuH0");
        nav__menu.classList.add("nav__menuH100");

    }
    else{
        nav__menu.classList.remove("nav__menuH100");
        nav__menu.classList.add("nav__menuH0"); 
    }
    for(let lista of li){
        lista.classList.toggle("animaciones-nav");
    }
});