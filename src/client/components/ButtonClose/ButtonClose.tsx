import React from "react";
import { XIcon } from "@heroicons/react/solid";
import twFocusClass from "utils/twFocusClass";

export interface ButtonCloseProps {
  className?: string;
  onClick?: (e:any) => void;
  iconSize?: string;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
  className = "",
  onClick = () => {},
  iconSize = "w-5 h-5",
}) => {
  return (
    <button
      className={
        `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` +
        twFocusClass()
      }
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <XIcon className={iconSize} />
    </button>
  );
};

export default ButtonClose;
