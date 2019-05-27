const initialState = 
  [
      {
        id: 1,
        deadline: '2019-01-12',
        person: 'John Walker',
        title: 'do some tasks',
        description: 'some description',
        isChanged: false,
        isDone: true,
        isTaskChanged: false
      },
      {
        id: 2423343,
        deadline: '2019-05-12',
        person: 'Liz Walker',
        title: 'create a task',
        description: 'some task description',
        isChanged: false,
        isDone:false,
        isTaskChanged: false
      },
      {
        id: 123424,
        deadline: '2019-01-12',
        person: 'Mike Jennous',
        title: 'call client',
        description: 'some call theme',
        isChanged: false,
        isDone: false,
        isTaskChanged: false
      }
    ]


const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return  [...state,action]
    case 'TASK_IS_DONE':
      return [...state].map(item => {
        if(item.id === action.id) {
          item.isDone = !item.isDone;
        }
        return item;
    })
    case 'TASK_IS_DELETED':
      return [...state].filter(item => item.id !== action.id)
    case 'TASK_CHANGED':
        return [...state].map(item => {
          if(item.id === action.id) {
            item.isTaskChanged = !item.isTaskChanged
          }
          return item;
      })
    case 'UPDATE_TASK':
        return [...state].map(item => {
          if(item.id === action.id) {
            item.person = action.person
            item.title = action.title
            item.description = action.description
            item.deadline = action.deadline
            item.isTaskChanged = !item.isTaskChanged
          }
          return item;
      })
    default:
      return state
  }
};

export default tasks;