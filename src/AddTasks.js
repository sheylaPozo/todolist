function addTasks(task) {
  let list = document.createElement("li");
  list.classList.add("list");

  let holder = document.createElement("div");
  holder.classList.add("holder");
  let marked = document.createElement("input");
  marked.type = "checkbox";

  let listToDo = document.createElement("p");
  listToDo.innerHTML = task.description;

  let dots = document.createElement("i");
  dots.classList.add("fa", "fa-ellipsis-v");

  list.appendChild(holder);
  holder.appendChild(marked);
  holder.appendChild(listToDo);
  list.appendChild(dots);

  return list;
}

export { addTasks };
