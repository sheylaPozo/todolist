import './style.css';

import dragAndDrop from './dragAndDrop.js';
import statusUpdate from './statusUpdate.js';

class TaskList {
  constructor() {
    this.size = 0;
    this.ul = document.getElementById('task-list');
    this.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
  }

  clearList() {
    this.savedList = this.savedList.filter((obj) => obj.completed !== true);
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.displayAllTask();
  }

  addIndex() {
    if (this.savedList.length < 1) {
      return this.size;
    }
    return this.savedList[this.savedList.length - 1].index + 1;
  }

  addTask(book) {
    this.savedList.push(book);
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.size += 1;
  }

  updateList() {
    let newIndex = 0;
    this.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    this.savedList.forEach((obj) => { newIndex += 1; obj.index = newIndex; });
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
  }

  edditTask(e, i) {
    if (e.key === 'Enter') {
      this.savedList[i].description = e.target.innerHTML;
      localStorage.setItem('savedList', JSON.stringify(this.savedList));
      this.displayAllTask();
      e.preventDefault();
    }
    e.target.parentNode.children[1].contentEditable = true;
  }

  deleteTask(e, i) {
    this.savedList.splice(i, 1);
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.displayAllTask();
  }

  displayAllTask() {
    this.ul.innerHTML = '';
    this.updateList();

    this.savedList.forEach((task, i) => {
      const li = document.createElement('li');
      li.className = 'list-item';
      li.draggable = 'true';
      li.addEventListener('dragstart', (e) => {
        dragAndDrop(e, i);
      });

      li.addEventListener('dragend', (e) => {
        dragAndDrop(e, i);
        this.displayAllTask();
      });

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', (e) => {
        statusUpdate(e, i);
        this.displayAllTask();
      });

      const p = document.createElement('p');
      const index = document.createElement('spand');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fas', 'fa-ellipsis-v', 'icon');
      p.addEventListener('keydown', (e) => {
        this.edditTask(e, i);
      });
      button.addEventListener('click', (e) => {
        button.classList.add('fa-trash-alt');
        document
          .querySelector('.fa-trash-alt')
          .addEventListener('click', (e) => {
            this.deleteTask(e, i);
          });
        this.edditTask(e, i);
      });

      p.innerHTML = task.description;
      index.innerHTML = task.index;

      li.appendChild(checkbox);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
      this.ul.appendChild(li);
      this.ul.addEventListener('dragover', (e) => {
        dragAndDrop(e, i);
      });
    });
  }
}

const newList = new TaskList();

export default function addTask(v) {
  newList.addTask({
    description: v,
    completed: false,
    index: newList.addIndex(),
  });
  newList.displayAllTask();
}

document.getElementById('clear-all-task').addEventListener('click', () => {
  newList.clearList();
});

window.addEventListener('load', () => {
  newList.displayAllTask();
});
