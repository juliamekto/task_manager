import React from 'react';
import PropTypes from 'prop-types';

const ButtonCreateForm = ({ type, action, caption, className }) => (
  <button className={className} 
          type={type}  
          onClick={action}>
          {caption}
  </button>
);

ButtonCreateForm.propTypes  = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  caption: PropTypes.string.isRequired,
  action: PropTypes.func
}

ButtonCreateForm.defaultProps  = {
  type: 'button',
  caption: 'button',
  className:'create-form__btn'
}

export default ButtonCreateForm;