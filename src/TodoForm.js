function form() {
  let form = document.createElement("form");
  form.classList.add("addDiv");
  let formText = document.createElement("input");
  formText.id = "addToList";
  formText.type = "text";
  formText.placeholder = "Add to your list...";

  let ul = document.createElement("ul");
  ul.classList.add("taskList");

  form.appendChild(formText);

  return form;
}

export { form };
