import { deleteTask } from './gatewayTasks';

// input: Event, callback
// output: boolean
const deleteTaskHandler = (event, renderCallback) => {
  if (!event.target.classList.contains('delete-btn')) {
    return false;
  }

  const listItemElem = event.target.closest('.list__item');
  deleteTask(listItemElem.dataset.id).then(() => {
    renderCallback();
  });
  return true;
};

export const deleteOldTask = (renderCallback) => function (event) {
  deleteTaskHandler(event, renderCallback);
};
