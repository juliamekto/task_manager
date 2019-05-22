import React from 'react'
import PropTypes from 'prop-types'

const InputCreateForm = ({ className, type, action, placeholder, name, value }) => {
    return (
        <input className={className} type={type} onChange={action} placeholder={placeholder} name={name} value={value}/>
    )
}

InputCreateForm.propTypes  = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    value: PropTypes.string
}

InputCreateForm.defaultProps  = {
    className: 'create-form__input',
    type: 'text',
    name: 'text',
    placeholder: '',
}

export default InputCreateForm;