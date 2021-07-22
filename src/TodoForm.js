export default function form() {
  const form = document.createElement('form');
  form.classList.add('addDiv');
  const formText = document.createElement('input');
  formText.id = 'addToList';
  formText.type = 'text';
  formText.placeholder = 'Add to your list...';

  const ul = document.createElement('ul');
  ul.classList.add('taskList');

  form.appendChild(formText);

  return form;
}
