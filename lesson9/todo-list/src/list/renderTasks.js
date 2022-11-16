import { getTasks } from './gatewayTasks';
import './list.scss';

// input: undefined
// output: Dom element
const createDeleteButton = () => {
  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.classList.add('delete-btn');
  return deleteButtonElement;
};

// input: boolean, string
// output: object
const createListItem = (done, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.dataset.id = id;
  return listItemElem;
};

// input: boolean
// output: object
const createCheckbox = (done) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  return checkbox;
};

// input: boolean, string
// output: dom element
const createSpan = (done, text) => {
  const spanElement = document.createElement('span');
  if (done) {
    spanElement.classList.add('list__item_text');
  }
  spanElement.textContent = text;
  return spanElement;
};

// input: boolean, string, string
// ouput: dom element
const fillListItem = (done, id, text) => {
  const listItemElem = createListItem(done, id);
  const checkbox = createCheckbox(done);
  const deleteButton = createDeleteButton();
  const textElement = createSpan(done, text);
  listItemElem.append(checkbox, textElement, deleteButton);
  return listItemElem;
};

// input: array
// output: undefined
export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';
  getTasks()
    .then((tasksList) => tasksList
      .map((task) => ({ ...task, date: new Date(task.date) }))
      .sort((task1, task2) => (task1.done === task2.done ? task2.date - task1.date : task1.done - task2.done))
      .map(({ id, text, done }) => fillListItem(done, id, text)))
    .then((tasksList) => listElem.append(...tasksList));
};
