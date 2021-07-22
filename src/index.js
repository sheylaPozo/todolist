// import _ from 'lodash';
import './style.css';
import TopDiv from './TodoTopDiv.js';
import form from './TodoForm.js';
import addTasks from './AddTasks.js';
import clearButton from './TodoBottomDiv.js';
import Task from './TodoConstructor.js';

const ul = document.createElement('ul');

const body = document.getElementById('body');
const mainDiv = document.getElementById('ToDoLists');
mainDiv.appendChild(TopDiv());
mainDiv.appendChild(form());
mainDiv.appendChild(ul);
mainDiv.appendChild(clearButton());
body.appendChild(mainDiv);

const myTasks = [];
myTasks.push(new Task('Cleaning', false, 0));
myTasks.push(new Task('Grocery shopping', false, 1));
myTasks.push(new Task('Pay the bills', false, 2));
myTasks.push(new Task('Feed the cats', false, 3));

myTasks.forEach((task) => {
  ul.appendChild(addTasks(task));
});
