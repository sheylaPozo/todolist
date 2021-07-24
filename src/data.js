let todos = 0;
const defaultTodo = [
  {
    description: 'Have Breakfast',
    completed: false,
    id: 0,
    index: 0,
  },
  {
    description: 'Grocery Shopping',
    completed: false,
    id: 1,
    index: 1,
  },
  {
    description: 'Cleaning',
    completed: false,
    id: 2,
    index: 2,
  },
  {
    description: 'Feed the Kitties',
    completed: false,
    id: 2,
    index: 3,
  },
];

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  todos = JSON.parse(localStorage.getItem('information'));
  if (todos === null) {
    todos = defaultTodo;
  }
} else {
  todos = defaultTodo;
}
export function save(variable) {
  localStorage.setItem('information', JSON.stringify(variable));
}
export function load() {
  const variable = JSON.parse(localStorage.getItem('information'));
  return variable;
}
export const todo = todos;
