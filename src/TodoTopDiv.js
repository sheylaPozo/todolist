function TopDiv() {
  let topDiv = document.createElement("div");
  topDiv.classList.add("todayDiv");
  let topDivText = document.createElement("p");
  topDivText.textContent = "Today's To Do";
  let topDivIcon = document.createElement("i");
  topDivIcon.classList.add("fas", "fa-sync");
  topDiv.appendChild(topDivText);
  topDiv.appendChild(topDivIcon);

  return topDiv;
}

export { TopDiv };
