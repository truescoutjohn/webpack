import { deleteTask } from './gatewayTasks.js';

// input: Event, callback
// output: boolean
const deleteTaskHandler = (event, renderCallback) => {
  if (!event.target.classList.contains('delete-btn')) {
    return false;
  }

  const listItemElem = event.target.closest('.list__item');
  deleteTask(listItemElem.dataset.id).then(_ => {
    renderCallback();
  });
  return true;
};

export const deleteOldTask = renderCallback => {
  return function (event) {
    deleteTaskHandler(event, renderCallback);
  };
};
