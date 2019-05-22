import React from 'react'
import PropTypes from 'prop-types'

const ButtonTaskList = ({ type, action, caption, className }) => (
  <button className={className} 
          type={type}  
          onClick={action}>
          {caption}
  </button>
);

ButtonTaskList.propTypes  = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  caption: PropTypes.string.isRequired,
  action: PropTypes.func
}

ButtonTaskList.defaultProps  = {
  type: 'button',
  caption: 'button',
  className:'task-info__btn'
}

export default ButtonTaskList;