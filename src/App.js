import React from 'react'
import CreateForm from './components/createForm/container/CreateForm'
import TaskList from './components/taskList/container/TaskList'
import './App.css'

const  App = () => {
    return (
      <div className="App">
        <h1 className='App__title'>Manage your tasks</h1>
        <div className="App__wrapper">
          <CreateForm />
          <TaskList />
        </div>
      </div>
    );
}

export default App;
