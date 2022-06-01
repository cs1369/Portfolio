let li = document.querySelectorAll(".nav__menu-items");
let menu= document.querySelector(".nav__iconMenu");
let nav__menu = document.querySelector(".nav__menuH0");
const btnskills = document.querySelector(".skills__sobreMi");
const card1 = document.querySelector(".card360__sobreMi1"), card2=document.querySelector(".card360__sobreMi2");
const html =document.querySelector(".html"),css=document.querySelector(".css"),js=document.querySelector(".js"),bts=document.querySelector(".bts");

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
btnskills.addEventListener("click",()=>{
    if(card1.classList.contains("animation-card1") || card1.classList.contains("animation-card2")){
        if(card1.classList.contains("animation-card1")){
            card1.classList.remove("animation-card1");
            card1.classList.add("animation-card2");
            card2.classList.remove("animation-card2");
            card2.classList.add("animation-card1");
        }else{
            card2.classList.remove("animation-card1");
            card2.classList.add("animation-card2");
            card1.classList.remove("animation-card2");
            card1.classList.add("animation-card1");
        }
    }
    else{
        card1.classList.add("animation-card1");
        card2.classList.add("animation-card2");
    }
    if(btnskills.textContent == "Skills"){
        btnskills.textContent ="Sobre Mi";
        html.classList.add("animation-html");
        css.classList.add("animation-css");
        js.classList.add("animation-js");
        bts.classList.add("animation-bts");
    }else{
        btnskills.textContent = "Skills";
        html.classList.remove("animation-html");
        css.classList.remove("animation-css");
        js.classList.remove("animation-js");
        bts.classList.remove("animation-bts");
    }
});