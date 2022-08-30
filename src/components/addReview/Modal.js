import React from 'react';
import Form from './Form';

const Modal = ({ open, onClose }) => {
    if (!open) return null;

  
  return (
    <div onClick={onClose}>
        <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <Form />
          </div>
        </div>
    </div>
  );
};

export default Modal;