// algo
// 1. Create event which is switched state of global state object
//   1.1. Find appropriate element in global state by id
//   1.2. Update field done
//   1.3. Call render method
//     1.3.1. Create list item, check done state and place relevalent class to this item
//     1.3.2. Create checkbox, check done state and place relevalent class to this item
//     1.3.3. Repeat from 1.3.1 to 1.3.2 while all objects is over and save to memory this array
//     1.3.4. Place to list all previous items
// 2. Create event which is made task by clicking creating button
//   2.1. Check if input is empty
//   2.2. If so it just skip all these steps
//   2.3. Paste in global state this object with right id and according done field (equivalent false)
//   2.4. Call render method and do 1.3.1 - 1.3.4 steps
// 3. All events should plugin to relevalent elements
import { createNewTask } from './list/createTask.js';
import { updateStateTask } from './list/updateTask.js';
import { deleteOldTask } from './list/deleteTask.js';
import { renderTasks } from './list/renderTasks.js';
import './styles.scss';

// input: undefined
// output: undefined
const initializeTodoHandler = () => {
  renderTasks();
  document.querySelector('.create-task-btn').addEventListener('click', createNewTask(renderTasks));
  document.querySelector('.list').addEventListener('click', updateStateTask(renderTasks));
  document.querySelector('.list').addEventListener('click', deleteOldTask(renderTasks));
};

const onStorageChange = _ => renderTasks();

window.addEventListener('storage', onStorageChange);
document.addEventListener('DOMContentLoaded', initializeTodoHandler);
