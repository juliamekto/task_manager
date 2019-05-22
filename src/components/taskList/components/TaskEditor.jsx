import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask } from '../actions/taskListActions'
import InputCreateForm from '../../createForm/components/InputCreateForm'
import ButtonCreateForm from '../../createForm/components/ButtonCreateForm'
import '../style/TaskEditor.css'

class TaskEditor extends Component {
    state = {
        title: this.props.title,
        deadline: this.props.deadline,
        description: this.props.description,
        person: this.props.person,
        id: this.props.id
    }

    handleInput = ({ target: { name, value } }) => this.setState({ [name]: value })

    updateTask = () => {
        let { title, description, deadline, person, id} = this.state;
        this.props.updateTask(id,person,title,description,deadline);
    }

    render() {
        const { person, deadline, title, description } = this.state;
        return (
            <form action="" className='task-editor-form'>
                <InputCreateForm placeholder='Task title'  
                                className='create-form__input task-editor__input--title' 
                                name='title' 
                                value={title}
                                action={this.handleInput}/>
                <InputCreateForm placeholder='Task description' 
                                className='create-form__input task-editor__input--description'  
                                name='description'
                                value={description}
                                action={this.handleInput} />
                <InputCreateForm placeholder='Task deadline' 
                                type='date' 
                                className='create-form__input task-editor__input--deadline'  
                                name='deadline'
                                value={deadline}
                                action={this.handleInput} />
                <InputCreateForm placeholder='Assignee' 
                                className='create-form__input task-editor__input--responsible'  
                                name='person'
                                value={person}
                                action={this.handleInput} />
                <ButtonCreateForm caption='change task' 
                                 action={this.updateTask}
                                 className='task-editor__btn'/>
            </form>
        )
    }
}


const mapStateToProps = state => ({ tasks: state });

const mapDistpatchToProps = dispatch => {
  return {
    updateTask: (id, person, title, description, deadline) => dispatch(updateTask( id, person, title, description, deadline ))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(TaskEditor);