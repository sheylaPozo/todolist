export default function TopDiv() {
  const topDiv = document.createElement('div');
  topDiv.classList.add('todayDiv');
  const topDivText = document.createElement('p');
  topDivText.textContent = "Today's things to Do";
  const topDivIcon = document.createElement('i');
  topDivIcon.classList.add('fas', 'fa-sync');
  topDiv.appendChild(topDivText);
  topDiv.appendChild(topDivIcon);

  return topDiv;
}
