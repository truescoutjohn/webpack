import { createTask } from './gatewayTasks';

// input: object, function
// output: undefined
const createTaskHandler = (event, callbackRender) => {
  const input = event.target.parentElement.querySelector('.task-input');
  if (input.value) {
    createTask({
      text: input.value,
      done: false,
      date: new Date(),
    }).then(() => {
      input.value = '';
      callbackRender();
    });
  }
};

// input: function
// output: function
export const createNewTask = (callbackRender) => function (event) {
  createTaskHandler(event, callbackRender);
};
