import { InputPropstype } from "@/lib/types/types";
import React from "react";

const Input: React.FC<InputPropstype> = ({
  label,
  name,
  placeholder,
  type,
  required,
  textArea
}) => {
  const textElement: JSX.Element = (
    <input
      name={name}
      id={name}
      placeholder={placeholder}
      type={type}
      className="py-4 px-2 border-2 border-grey rounded-xl"
      required={required}
    />
  );
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      {textArea  ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          
          className="py-6 px-2 border-2 border-grey rounded-xl"
          required={required}
        />
      ) : (
        textElement
      )}
    </div>
  );
};

export default Input;
