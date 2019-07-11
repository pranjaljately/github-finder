import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, clearAlert } = alertContext;
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

export default Alert;
