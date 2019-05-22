import React, { Component } from 'react'
import { connect } from 'react-redux';
import TaskListItem from '../components/TaskListItem'
import '../style/TaskList.css'

class TaskList extends Component {
    render() {
        const { tasks } = this.props;
        const taskItem = tasks.map( item => <TaskListItem item={item} key={item.id}/> )
        
        return (
            <div className='task-list'>
                {taskItem}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(TaskList);