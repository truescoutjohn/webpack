import { createTask } from './gatewayTasks.js';

// input: object, function
// output: undefined
const _createTaskHandler = (event, callbackRender) => {
  const input = event.target.parentElement.querySelector('.task-input');
  if (input.value) {
    createTask({
      text: input.value,
      done: false,
      date: new Date(),
    }).then(_ => {
      input.value = '';
      callbackRender();
    });
  }
};

// input: function
// output: function
export const createNewTask = callbackRender => {
  return function (event) {
    _createTaskHandler(event, callbackRender);
  };
};
