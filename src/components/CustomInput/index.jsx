import React from 'react';
import './сustomInput.scss';

const CustomInput = ({ label, value, onChange, type="text", isCorrect=true }) => {
  return (
    <div className="custom-input">
      <label className="custom-input__label">{label}</label>
      <input
        className={isCorrect ? 
          "custom-input__input" : 
          "custom-input__input-error" }
        type={type}
        value={value}
        onChange={onChange}
      />
      {!isCorrect && <p className='custom-input__message'>ошибка</p>}
    </div>
  );
};

export default CustomInput;
