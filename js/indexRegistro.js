"use strict";
const EXPRREGULARMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const EXPREGULARPASS =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
const REGULANOMBRE = /^ [A-Za-z] \\ w {5, 29} $/;
const REGULARAPELLIDO = /^ [A-Za-z] \\ w {5, 39} $/;
const REGULARCODPOST = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const REGULARPHONE = /^([0-9]{5})+((-{1})*)+([0-9]{6})$/;

//REGISTRO
var formRegistro = document.querySelector(`#formRegistro`);
formRegistro.addEventListener(`submit`, function (e) {
  let datosUser = [];
  let radioEmpresa = document.querySelector(`#empresa`);
  let radioParticular = document.querySelector(`#particular`);
  let mailRegistro = document.querySelector(`#mailRegistro`).value;
  let passResgistro = document.querySelector(`#passRegistro`).value;
  let passRepeat = document.querySelector(`#passRepeat`).value;
  let nombre = document.querySelector(`#nombre`).value;
  let apellidos = document.querySelector(`#apellidos`).value;
  let select = document.querySelector(`#ciudades`).value;
  let direccion = document.querySelector(`#direccion`).value;
  let codPostal = document.querySelector(`#codPostal`).value;
  let localidad = document.querySelector(`#localidad`).value;
  let telefono = document.querySelector(`#telefono`).value;
  let comunicaciones = document.querySelector(`#comunicaciones`);
  let cookies = document.querySelector(`#cookies`).checked;
  var errorMail = document.querySelector(`#errorMail`);
  let errorNombre = document.querySelector(`#errorNombre`);
  let errorApellido = document.querySelector(`#errorApellido`);
  let errorPass = document.querySelector("#errorPass");
  let errorDireccion = document.querySelector("#errorDireccion");
  let errorPostal = document.querySelector("#errorPostal");
  let errorLocalidad = document.querySelector("#errorLocalidad");
  let errorTelefono = document.querySelector("#errorTelefono");
  let errorPolitica = document.querySelector('#errorPolitica')
  //Radios
  //Mail 
  if (EXPRREGULARMAIL.test(mailRegistro)) {
    datosUser.push(mailRegistro);
    errorMail.style.display = "none";
  } else {
    errorMail.style.display = "block";
    errorMail.style.color = "red";
    errorMail.style.fontSize = ".7rem";
    errorMail.innerHTML = `<i class="bi bi-x-circle"></i> Por favor inserte un mail correcto`;
    e.preventDefault();
  }
  //Pass
  if (EXPREGULARPASS.test(passResgistro) && passResgistro == passRepeat) {
    datosUser.push(passResgistro);
    e.preventDefault();
  } else if (passResgistro == "" || passRepeat == "") {
    errorPass.style.display = "block";
    errorPass.style.color = "red";
    errorPass.style.fontSize = ".7rem";
    errorPass.innerHTML = `<i class="bi bi-x-circle"></i> Los campos no pueden estar vacios`;
    e.preventDefault();
  } else if (passResgistro != passRepeat) {
    errorPass.style.display = "block";
    errorPass.style.color = "red";
    errorPass.style.fontSize = ".7rem";
    errorPass.innerHTML = `<i class="bi bi-x-circle"></i> Las contraseñas no coinciden`;
    e.preventDefault();
  } else {
    errorPass.style.display = "block";
    errorPass.style.color = "red";
    errorPass.style.fontSize = ".7rem";
    errorPass.innerHTML = `<i class="bi bi-x-circle"></i> Introduzca una contraseña con un formato correcto`;
    e.preventDefault();
  }

  //Datos Usuario
  //Nombre
  if (REGULANOMBRE.test(nombre)) {
    datosUser.push(nombre);
    e.preventDefault();
  } else if (nombre == null || nombre == "" || nombre.length == 0) {
    errorNombre.style.display = "block";
    errorNombre.style.color = "red";
    errorNombre.style.fontSize = ".7rem";
    errorNombre.innerHTML = `<i class="bi bi-x-circle"></i> Por favor rellene el campo nombre`;
    e.preventDefault();
  } else {
    errorNombre.style.display = "block";
    errorNombre.style.color = "red";
    errorNombre.style.fontSize = ".7rem";
    errorNombre.innerHTML = `<i class="bi bi-x-circle"></i> Por favor inserte un nombre correcto`;
    e.preventDefault();
  }

  //apellido
  if (REGULANOMBRE.test(apellidos)) {
    datosUser.push(apellidos);
    errorApellido.style.display = "none";
  } else if (apellidos == null || apellidos == "" || apellidos.length == 0) {
    errorApellido.style.display = "block";
    errorApellido.style.color = "red";
    errorApellido.style.fontSize = ".7rem";
    errorApellido.innerHTML = `<i class="bi bi-x-circle"></i> Por favor rellene el campo apellido`;
    e.preventDefault();
  } else {
    errorApellido.style.display = "block";
    errorApellido.style.color = "red";
    errorApellido.style.fontSize = ".7rem";
    errorApellido.innerHTML = `<i class="bi bi-x-circle"></i> Por favor inserte un apellido correcto`;
    e.preventDefault();
  }

  //ciuddad
  /* console.log(datosUser);
  if (ciudad != "#") {
    datosUser.push(ciudad);
  }*/

  //Direccion
  if (direccion == null || direccion == "" || direccion.length == 0) {
    errorDireccion.style.display = "block";
    errorDireccion.style.color = "red";
    errorDireccion.style.fontSize = ".7rem";
    errorDireccion.innerHTML = `<i class="bi bi-x-circle"></i> Por favor rellene el campo dirección`;
    e.preventDefault();
  } else {
    datosUser.push(direccion);
    errorDireccion.style.display = "none";
    e.preventDefault();
  }

  //codigo postal
  if (REGULARCODPOST.test(codPostal)) {
    datosUser.push(codPostal);
    errorPostal.style.display = "none";
    e.preventDefault();
  } else if (codPostal == null || codPostal == "" || codPostal.length == 0) {
    errorPostal.style.display = "block";
    errorPostal.style.color = "red";
    errorPostal.style.fontSize = ".7rem";
    errorPostal.innerHTML = `<i class="bi bi-x-circle"></i> Por favor, rellene el campo codigo postal`;
    e.preventDefault();
  } else {
    errorPostal.style.display = "block";
    errorPostal.style.color = "red";
    errorPostal.style.fontSize = ".7rem";
    errorPostal.innerHTML = `<i class="bi bi-x-circle"></i> Por favor, introduzca un codigo postal correcto`;
    e.preventDefault();
  }

  //Localidad
  if (localidad == null || localidad == "" || localidad.length == 0) {
    errorLocalidad.style.display = "block";
    errorLocalidad.style.color = "red";
    errorLocalidad.style.fontSize = ".7rem";
    errorLocalidad.innerHTML = `<i class="bi bi-x-circle"></i> Por favor rellene el campo dirección`;
    e.preventDefault();
  } else {
    datosUser.push(localidad);
    errorLocalidad.style.display = "none";
    e.preventDefault();
  }

  //Telefono
  if (REGULARCODPOST.test(telefono)) {
    datosUser.push(telefono);
    errorTelefono.style.display = "none";
  } else if (telefono == null || telefono == "" || telefono.length == 0) {
    errorTelefono.style.display = "block";
    errorTelefono.style.color = "red";
    errorTelefono.style.fontSize = ".7rem";
    errorTelefono.innerHTML = `<i class="bi bi-x-circle"></i> Por favor, rellene el campo telefono`;
    e.preventDefault();
  } else {
    errorTelefono.style.display = "block";
    errorTelefono.style.color = "red";
    errorTelefono.style.fontSize = ".7rem";
    errorTelefono.innerHTML = `<i class="bi bi-x-circle"></i> Por favor, introduzca un numero de telefono correcto`;
    e.preventDefault();
  }

  //checkbox
  if(!cookies){
    errorPolitica.style.display = "block";
    errorPolitica.style.color = "red";
    errorPolitica.style.fontSize = ".7rem";
    errorPolitica.innerHTML = `<i class="bi bi-x-circle"></i> Por favor, acepte nuestra politica`;
    e.preventDefault();
  }
  e.preventDefault();
});

const toggle = document.getElementById("toggle");
        toggle.addEventListener("click", ()=>{
            toggle.classList.toggle("active");
            $('.menu_principal').toggle();
        });