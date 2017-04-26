var element = document.querySelector(".form");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

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
    hiddenToolTip(name);
  }
}

function validateEmail(email){
  if(email.value.length==0 || /^\s+|\s+$/.test(email.value)){
    showToolTip("Debe ingresar su correo electrónico",email); return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))) {
    showToolTip("Correo no válido. Ejemplo: name@domain.com",email); return false;
  }
  else{
    hiddenToolTip(email);
  }
}

function validateMessage(message){
  /** Validacion para nombre**/
  if(message.value.length==0 || /^\s+|\s+$/.test(message.value)){
    showToolTip("Debe ingresar su mensaje",message); return false;
  }
  else {
    hiddenToolTip(message);
  }
}

function hiddenToolTip(nodoInput){
  var nodoSpan= nodoInput.nextElementSibling;
  nodoSpan.setAttribute("style","display:none");
}

function showToolTip(texto,nodoInput){
    var nodoSpan= nodoInput.nextElementSibling;
    nodoSpan.setAttribute("style","display:block");
    nodoSpan.innerHTML = texto;
}
