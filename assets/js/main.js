/** Validacion Formulario **/
var element = document.querySelector(".form");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

var a = "";  var b= ""; var c="";

function validateForm(){
  var name = document.getElementById("input-name");
  var email = document.getElementById("input-email");
  var message = document.getElementById("input-message");

  validateName(name);
  validateEmail(email);
  validateMessage(message);
}

function validateName(name){
  /** Validacion para nombre**/
  if(name.value.length==0 || /^\s+|\s+$/.test(name.value)){
    showToolTip("Debe ingresar su nombre",name); return false;
  }
  else {
        a=1;
    hiddenToolTip(name);
  }
}

function validateEmail(email){
  if(email.value.length==0 || /^\s+|\s+$/.test(email.value)){
    showToolTip("Debe ingresar su correo electrónico",email);return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))) {
    showToolTip("Correo no válido. Ejemplo: name@domain.com",email);return false;
  }
  else{
    b=2;
    hiddenToolTip(email);
  }
}

function validateMessage(message){
  /** Validacion para nombre**/
  if(message.value.length==0 || /^\s+|\s+$/.test(message.value)){
    showToolTip("Debe ingresar su mensaje",message);return false;
  }
  else {
    c=3;
    hiddenToolTip(message);
  }
}

function hiddenToolTip(nodoInput){
  var nodoSpan= nodoInput.nextElementSibling;
  nodoSpan.setAttribute("style","display:none");
  if(a==1 && b==2 & c==3){
    callModal();
  }
}

function showToolTip(texto,nodoInput){
    var nodoSpan= nodoInput.nextElementSibling;
    nodoSpan.setAttribute("style","display:block");
    nodoSpan.innerHTML = texto;
}

function callModal() {
  /** Mostrar modal**/
    modal.style.display = "block";
    /**Close Modal **/
    modalClose.addEventListener("click",function(){
    modal.style.display = "none";
  })

}

/** Evento drag & drog**/
function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

//VALIDACION DE LA PRIMERA LETRA CON MAYUSCULA

var inputs = document.getElementById("input-name");
var validacionInputs = function (e) {
  var arrDato=this.value.split(" ");
  var datoConMayuscula = "";
  for(var i=0; i<arrDato.length; i++){
    datoConMayuscula += arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase() + " ";
  }
  this.value=datoConMayuscula;
  }
  inputs.onblur=validacionInputs;
