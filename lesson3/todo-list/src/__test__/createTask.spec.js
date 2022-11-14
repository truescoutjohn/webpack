import { addTaskToArrayTasks, tasks } from '../index';

it('Check if task adds to array of tasks', () => {
  tasks.length = 0;
  const task = { id: '1', text: 'Buy milk', done: false, date: new Date(1900, 1, 1) };
  expect(addTaskToArrayTasks(task)).toEqual(true);
  expect(task).toEqual(tasks[0]);
});

it("Check if empty task is n't added to array of tasks", () => {
  tasks.length = 0;
  expect(addTaskToArrayTasks({})).toEqual(false);
  expect(tasks.length).toEqual(0);
});
