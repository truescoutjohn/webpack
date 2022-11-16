import { createTask, getTasks } from '../list/gatewayTasks';

it('Check if task adds to array of tasks', () => {
  createTask({ text: 'example', done: false, date: new Date() });
  expect(getTasks().length).toEqual(1);
});
