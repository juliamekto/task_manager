import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTask, deleteTask, isTaskChanged } from '../actions/taskListActions'
import classNames from 'classnames/bind'
import ButtonTaskList from './ButtonTaskList'
import TaskEditor from './TaskEditor'

class TaskListItem extends Component  {
    state = {
        isDescriptionShown: false
    }

    isDescriptionShown = () => {
        const { isDescriptionShown } = this.state
        this.setState({ isDescriptionShown: !isDescriptionShown })
    }

    isTaskDone = () => {
        const { id } = this.props.item
        this.props.completeTask(id)
    }

    deleteTask = () => {
        const { id } = this.props.item
        this.props.deleteTask(id)
    }

    changeTask = () => {
        const { id } = this.props.item
        this.props.changeTask(id)
    }

    render() {
        const { person, deadline, title, isDone, isTaskChanged, description, id } = this.props.item;
        const { isDescriptionShown } = this.state
        const descItemClass = classNames('task-info__item task-info__item--description',{
            'task-info__item--description-shown': isDescriptionShown 
        }); 
        const taskInfo = classNames('task-info',{
            'task-info--done': isDone 
        }); 
       let taskContent;

       if( isTaskChanged ) {
            taskContent =   <div className='task-list__item'> <TaskEditor person={person} deadline={deadline} title={title}  description={description} id={id}/> </div>
       } else { 
        taskContent = <div className='task-list__item'> 
            <div className={taskInfo}>
                <span className="task-info__item task-info__item--person">{person}</span>
                <span className="task-info__item task-info__item--date">{deadline}</span>
                <span className="task-info__item task-info__item--title">{title}</span>
                <span className={descItemClass}>{description}</span>
            </div>
            <div className="task-btns">
                <ButtonTaskList caption='more' className='task-info__btn task-info__btn--more' action={this.isDescriptionShown}/>
                <ButtonTaskList caption='delete' className='task-info__btn task-info__btn--delete' action={this.deleteTask}/>
                <ButtonTaskList caption='done' className='task-info__btn task-info__btn--done' action={this.isTaskDone}/>
                <ButtonTaskList caption='edit' className='task-info__btn task-info__btn--change' action={this.changeTask}/>
            </div>
        </div>
       }
        return (
            <div>{taskContent}</div>   
        )
    }
}

const mapStateToProps = state => ({ tasks: state.tasks });

const mapDistpatchToProps = dispatch => {
  return {
    completeTask: value => dispatch(completeTask( value )),
    deleteTask: value => dispatch(deleteTask(value)),
    changeTask: value => dispatch(isTaskChanged(value))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(TaskListItem);