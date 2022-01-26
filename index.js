var buttonEl = document.querySelector("button");
var resultEl = document.querySelector(".result");
var input = document.querySelector("input");

buttonEl.addEventListener("click", afterClick);
input.addEventListener("keypress", afterEnterPress);

function afterEnterPress(event) {
  if (input.value.length > 0 && event.which == 13) {
    addList();
  }
}

function afterClick() {
  if (input.value.length > 0) {
    addList();
  }
}

function addList() {
  var field = document.createElement("li");
  var dBtn = document.createElement("button");

  field.style.backgroundColor = "lightblue";
  field.textContent = input.value;
  input.value = "";
  input.placeholder = "Wanna add more?";
  field.addEventListener("click", complete);
  resultEl.appendChild(field);

  dBtn.appendChild(document.createTextNode("X"));
  field.appendChild(dBtn);
  dBtn.addEventListener("click", removeItem);

  function removeItem() {
    var response = confirm("Are you sure you want to remove this item?");
    if (response)
        field.classList.add("delete");
  }
  function complete() {
    field.classList.add("done");
  }
}
