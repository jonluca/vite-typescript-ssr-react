import React from "react";
export interface RadioProps {
  name: string;
  label?: string;
  id: string;
}
const Radio: React.FC<RadioProps> = ({ name, label, id }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="radio"
        className="focus:ring-action-primary h-4 w-4 text-action-primary border-primary"
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-3 block text-paragraph-small text-black dark:text-white"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
