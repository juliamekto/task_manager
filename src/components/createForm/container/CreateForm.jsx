import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import InputCreateForm from '../components/InputCreateForm'
import ButtonCreateForm from '../components/ButtonCreateForm'
import InlineError from '../../inlineError/InlineError'
import { createTask }  from '../actions/createFormActions'
import '../style/CreateForm.css'

class CreateForm  extends Component {
    state = {
        isFormValid: false,
        error: ''
    }

    generateId = () => {
        const id = '_' + Math.random().toString(36).substr(2, 5); 
        return id;
    }

    handleInput = ({ target: { name, value } }) => this.setState({ [name]: value })
    
    cleanForm = () => {
        this.setState({id:'', person: '', title: '', description: '', deadline: '', isFormValid: false })
    }

    isFormValid = () => {
        let { person, title, description, deadline, isFormValid, error } = this.state;

        if(person === '' || title === '' || deadline === '' || description === '') {
            error = 'Invalid form. Fields cannot be empty';
            this.setState ({ isFormValid: false, error });
        } else if (person === undefined || title === undefined || deadline === undefined || description === undefined) {
            error = 'Invalid form. Fields cannot be empty';
            this.setState ({ isFormValid: false, error });
        } else {
            isFormValid = true;
            error = '';
            this.setState ({ isFormValid, error});
        }

        return isFormValid;
    }

    sendData = () => {
        let { title, description, deadline, person} = this.state;
        const taskData = {
            id: this.generateId(),
            person,
            title,
            description,
            deadline
        }
      
        if(this.isFormValid()) {
            this.props.createTask(taskData);
            this.cleanForm()
        }
    }

    render() {
        const { error } = this.state;
        
        const inlineError = classNames('inline-error',{
            'inline-error--show': error 
        }); 

        return (
            <div>
                <form action="" className='create-form'>
                    <InputCreateForm placeholder='Task title'  
                                    className='create-form__input create-form__input--title' 
                                    name='title' 
                                    action={this.handleInput}/>
                    <InputCreateForm placeholder='Task description' 
                                    className='create-form__input create-form__input--description'  
                                    name='description'
                                    action={this.handleInput} />
                    <InputCreateForm placeholder='Task deadline' 
                                    type='date' 
                                    className='create-form__input create-form__input--deadline'  
                                    name='deadline'
                                    action={this.handleInput} />
                    <InputCreateForm placeholder='Assignee' 
                                    className='create-form__input create-form__input--responsible'  
                                    name='person'
                                    action={this.handleInput} />
                    <ButtonCreateForm caption='create task' 
                                    action={this.sendData}/>
                </form>
                 <InlineError className={inlineError} formErrors={error}/>
            </div>   
        )
    }
}

const mapStateToProps = state => ({ tasks: state });

const mapDistpatchToProps = dispatch => {
  return {
    createTask: value => dispatch(createTask( value ))
  }
};

export default connect(mapStateToProps, mapDistpatchToProps)(CreateForm);