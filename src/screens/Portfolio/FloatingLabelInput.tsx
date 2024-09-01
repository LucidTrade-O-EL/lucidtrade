import React, { forwardRef } from "react";

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, value, onChange, placeholder }, ref) => {
    return (
      <div className="floating-label-input">
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref} // Pass ref to the input
        />
      </div>
    );
  }
);

export default FloatingLabelInput;
