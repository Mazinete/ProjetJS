var exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector(".modal-title");
  var modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = "New message to " + recipient;
  modalBodyInput.value = recipient;
});

var add = document.getElementById("add");
add.addEventListener("click", function () {
  // TODO: récupérer les valeurs des input
  // Ajouter au tableau
  // fermer la modale
  var prenom = document.getElementById("prenom");
  var nom = document.getElementById("nom");
  var email = document.getElementById("email");
  var poste = document.getElementById("poste");
 

  var table = document.getElementById("table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = prenom.value;
  cell2.innerHTML = nom.value;
  cell3.innerHTML = email.value;
  cell4.innerHTML = poste.value;
  var item = document.createElement("button");
  item.setAttribute("class", "btn btn-danger supprimer");
  item.setAttribute("type", "button");
  item.innerText = "Supprimer";
  cell5.appendChild(item);
  item.addEventListener("click", function () {
    //Supprimer la ligne
    row.remove();
  })
  
});
