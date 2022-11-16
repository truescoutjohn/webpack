import { createNewTask } from './list/createTask';
import { updateStateTask } from './list/updateTask';
import { deleteOldTask } from './list/deleteTask';
import { renderTasks } from './list/renderTasks';
import './styles.scss';

// input: undefined
// output: undefined
const initializeTodoHandler = () => {
  renderTasks();
  document.querySelector('.create-task-btn').addEventListener('click', createNewTask(renderTasks));
  document.querySelector('.list').addEventListener('click', updateStateTask(renderTasks));
  document.querySelector('.list').addEventListener('click', deleteOldTask(renderTasks));
};

const onStorageChange = () => renderTasks();

window.addEventListener('storage', onStorageChange);
document.addEventListener('DOMContentLoaded', initializeTodoHandler);
