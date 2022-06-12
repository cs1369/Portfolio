let li = document.querySelectorAll(".nav__menu-items");
let menu= document.querySelector(".nav__iconMenu");
let nav__menu = document.querySelector(".nav__menuH0");
const btnskills = document.querySelector(".skills__sobreMi");
const card1 = document.querySelector(".card360__sobreMi1"), card2=document.querySelector(".card360__sobreMi2");
const html =document.querySelector(".html"),css=document.querySelector(".css"),js=document.querySelector(".js"),bts=document.querySelector(".bts");

menu.addEventListener("click",()=>{
    if(li[1].classList.contains("animaciones-nav")){
        for(let lista of li){
            lista.classList.remove("animaciones-nav");
            lista.classList.add("animaciones-nav2");
            
        }
    }
    else if(li[1].classList.contains("animaciones-nav2")){
        for(let lista of li){
            lista.classList.remove("animaciones-nav2");
            lista.classList.add("animaciones-nav");
        }
    }
    else{
        for(let lista of li){
            lista.classList.add("animaciones-nav");
        }
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
    const skillsH3=document.querySelectorAll(".skills__h3");
    for(let h3 of skillsH3){
        h3.classList.toggle("animation__skillsH3");
    }
});


// EMAIL
const btnform=document.querySelector(".btn2__footer");
const btnEmail=document.querySelector(".email__footer");
btnEmail.addEventListener("click",()=>{
    document.querySelector(".formEmail__footer").classList.toggle("form-visible");
    document.getElementById('form').reset();
});
btnform.addEventListener("click",()=>{
    document.querySelector(".formEmail__footer").classList.toggle("form-visible");
});
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviado...';

   const serviceID = 'default_service';
   const templateID = 'template_8sv3829';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje Enviado. Muchas Gracias!');
      form.reset();
      document.querySelector(".formEmail__footer").classList.add("form-visible");
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
      
    });
    
});