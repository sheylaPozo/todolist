export default function addTasks(task) {
  const list = document.createElement('li');
  list.classList.add('list');

  const holder = document.createElement('div');
  holder.classList.add('holder');
  const marked = document.createElement('input');
  marked.type = 'checkbox';

  const listToDo = document.createElement('p');
  listToDo.innerHTML = task.description;

  const dots = document.createElement('i');
  dots.classList.add('fa', 'fa-ellipsis-v');

  list.appendChild(holder);
  holder.appendChild(marked);
  holder.appendChild(listToDo);
  list.appendChild(dots);

  return list;
}
