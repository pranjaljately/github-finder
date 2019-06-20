import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, clearAlert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.message}
        <button
          style={{
            float: 'right',
            backgroundColor: 'Transparent',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
          }}
          onClick={clearAlert}
        >
          &times;
        </button>
      </div>
    )
  );
};

Alert.protoTypes = {
  alert: PropTypes.object.isRequired,
  clearAlert: PropTypes.func.isRequired,
};

export default Alert;
