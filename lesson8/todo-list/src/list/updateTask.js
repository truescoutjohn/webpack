import { getTasks, updateTask } from './gatewayTasks.js';

// input: object, object
// ouput: Promise
const _updateTaskField = (checkbox, listItemElem) =>
  getTasks()
    .then(tasks => tasks.find(({ id }) => id === listItemElem.dataset.id))
    .then(task => {
      if (!task.done) {
        checkbox.setAttribute('checked', '');
      } else {
        checkbox.removeAttribute('checked');
      }
      const updatedTask = { ...task, done: !task.done, date: new Date() };
      return updateTask(updatedTask);
    });

// input: object, function
// output: boolean
const updateStateTaskHandler = (event, callbackRender) => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return false;
  }
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  listItemElem.classList.toggle('list__item_done');
  _updateTaskField(checkbox, listItemElem).then(_ => callbackRender());
  return true;
};

// input: function
// ouput: function
export const updateStateTask = callbackRender => {
  return function (event) {
    updateStateTaskHandler(event, callbackRender);
  };
};
