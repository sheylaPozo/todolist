let target;

function sorting(source, target) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  if (savedList.length < 2) return;

  const sourceObj = savedList[source];
  const souceIndex = savedList[source].index;
  let targetIndex;
  // eslint-disable-next-line array-callback-return
  savedList.map((obj) => {
    if (obj.index === Number(target)) {
      targetIndex = savedList.indexOf(obj);
    }
  });

  savedList[source].index = savedList[targetIndex].index;
  savedList[targetIndex].index = souceIndex;

  savedList[source] = savedList[targetIndex];
  savedList[targetIndex] = sourceObj;
  localStorage.setItem('savedList', JSON.stringify(savedList));
}

export default function dragAndDrop(event, index) {
  const newEvent = event.type;
  const source = index;
  switch (newEvent) {
    case 'dragstart':
      event.target.classList.add('dragging');
      break;
    case 'dragend':
      event.target.classList.remove('dragging');
      sorting(source, target);
      break;
    case 'dragover':
      if (event.target.className === 'list-item') {
        target = event.target.children[2].innerHTML;
      }
      break;
    default:
      break;
  }
}
