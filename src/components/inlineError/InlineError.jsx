import React from 'react'
import PropTypes from 'prop-types'
import './style/InlineError.css'
 
const InlineError = ({ formErrors, className }) =>  (
    <div className={className}>an error: {formErrors}</div>
);

 InlineError.propTypes  = {
   formErrors: PropTypes.string,
   className: PropTypes.string
 }

 InlineError.defaultProps  = {
  className: 'inline-error'
}

export default InlineError;