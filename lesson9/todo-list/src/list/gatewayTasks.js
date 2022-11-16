const baseUrl = 'https://636a8bfbc07d8f936da160be.mockapi.io/api/v1/tasks';

export const getTasks = () => fetch(baseUrl, { method: 'GET' }).then((response) => response.json());

export const getTask = (taskId) => fetch(`${baseUrl}/${taskId}`, { method: 'GET' }).then((response) => response.json());

export const updateTask = (task) => fetch(`${baseUrl}/${task.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
}).then((response) => response.json());

export const createTask = (task) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
}).then((response) => response.json());

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, { method: 'DELETE' }).then((response) => response.json());
