function statusUpdate(e, i) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  savedList[i].completed = !savedList[i].completed;
  e.target.checked = savedList[i].completed;
  localStorage.setItem('savedList', JSON.stringify(savedList));
}
export default statusUpdate;
