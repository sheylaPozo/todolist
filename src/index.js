import _ from "lodash";
import "./style.css";
import { TopDiv } from "./TodoTopDiv";
import { form } from "./TodoForm";
import { addTasks } from "./AddTasks";
import { clearButton } from "./TodoBottomDiv";
import { Task } from "./TodoConstructor";
let ul = document.createElement("ul");

let body = document.getElementById("body");
let mainDiv = document.getElementById("ToDoLists");
mainDiv.appendChild(TopDiv());
mainDiv.appendChild(form());
mainDiv.appendChild(ul);
mainDiv.appendChild(clearButton());
body.appendChild(mainDiv);

let myTasks = [];
myTasks.push(new Task("to do cleaning", false, 0));
myTasks.push(new Task("to buy the groceries", false, 1));
myTasks.push(new Task("to pay the bills", false, 2));

myTasks.forEach((task) => {
  ul.appendChild(addTasks(task));
});
