import React from 'react';
import './FloatingLabelInput.css';

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor="floatingInput">{label}</label>
      <input
        type="text"
        id="floatingInput"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FloatingLabelInput;
