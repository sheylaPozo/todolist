export default function clearButton() {
  const clearButton = document.createElement('button');
  clearButton.classList.add('clear-button');
  clearButton.type = 'submit';
  clearButton.innerHTML = 'Clear all completed';
  return clearButton;
}
