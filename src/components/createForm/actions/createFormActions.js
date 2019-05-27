export const createTask = ({ id, person, title, description, deadline }) => ({
    type: 'CREATE_TASK',
    id,
    person,
    title,
    deadline,
    description,
    isChanged: false,
    isDone:false,
    isTaskChanged: false
  });
