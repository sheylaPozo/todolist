export default function Task(description, completed = false, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
