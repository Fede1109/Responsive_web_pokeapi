'use strict'
const EXPRREGULARMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const EXPREGULARPASS =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  //INICIO SESION
var formSesion = document.querySelector(`#formInicioSesion`);
formSesion.addEventListener(`submit`, function (e) {
    let datosUser = [];
    let mailInicio = document.querySelector(`#mailInicio`).value;
    let passInicio = document.querySelector(`#passInicio`).value;
    let errorMail = document.querySelector(`#errorMail`);
    let errorPass = document.querySelector("#errorPass");
    //MAIL
    if (EXPRREGULARMAIL.test(mailInicio)) {
        datosUser.push(mailInicio);
        errorMail.style.display = "none";
      } else {
        errorMail.style.display = "block";
        errorMail.style.color = "red";
        errorMail.style.fontSize = ".7rem";
        errorMail.innerHTML = `<i class="bi bi-x-circle"></i> Por favor inserte un mail correcto`;
        e.preventDefault();
      }
    
      //PASS
    if(EXPREGULARPASS.test(passInicio)){
        datosUser.push(passInicio);
        errorPass.style.display = "none";
    }else{
        errorPass.style.display = "block";
        errorPass.style.color = "red";
        errorPass.style.fontSize = ".7rem";
        errorPass.innerHTML = `<i class="bi bi-x-circle"></i> Por favor inserte una contraseña correcta`;
        e.preventDefault();   
    }
    e.preventDefault();
});

const toggle = document.getElementById("toggle");
        toggle.addEventListener("click", ()=>{
            toggle.classList.toggle("active");
            $('.menu_principal').toggle();
        });