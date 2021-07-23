export default function updateStatus(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('TodoList'));
  status[event.target.dataset.id].completed = event.target.checked;
  localStorage.setItem('TodoList', JSON.stringify(status));
}
