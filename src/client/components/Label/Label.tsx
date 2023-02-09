import React, { FC } from "react";

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ className = "", children }) => {
  return (
    <span
      className={`nc-Label ${className} text-neutral-800 font-medium text-sm dark:text-neutral-300`}
      data-nc-id="Label"
    >
      {children}
    </span>
  );
};

export default Label;
