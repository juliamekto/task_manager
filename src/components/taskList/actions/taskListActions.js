export const completeTask = (id) => ({
    type: 'TASK_IS_DONE',
    id
});

export const deleteTask = (id) => ({
  type: 'TASK_IS_DELETED',
  id
});

export const isTaskChanged = (id) => ({
  type: 'TASK_CHANGED',
  id
});

export const updateTask = (id, person, title, description, deadline) => ({
  type: 'UPDATE_TASK',
  id,
  person,
  title,
  description,
  deadline
});