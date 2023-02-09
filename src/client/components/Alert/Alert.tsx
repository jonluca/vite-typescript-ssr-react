import React from "react";
import ButtonClose from "components/ButtonClose/ButtonClose";

export interface AlertProps {
  children: React.ReactNode;
  containerClassName?: string;
  type?: string;
  onClick?: (e:any) => void;
}

export const Alert: React.FC<AlertProps> = ({
  children = "Alert Text",
  containerClassName = "",
  type = "",
  onClick = () => {},
}) => {
  let classes = containerClassName;
  let btnclass = "";
  switch (type) {
    case "default":
      classes += " text-white bg-neutral-400";
      btnclass += " text-white";
      break;
    case "info":
      classes += " bg-secondary-100 text-neutral-600";
      btnclass += " text-neutral-600";
      break;
    case "success":
      classes += " bg-green-200 text-neutral-600";
      btnclass += " text-neutral-600";
      break;
    case "error":
      classes += " bg-red-200 text-neutral-600";
      btnclass += " text-neutral-600";
      break;
    case "warning":
      classes += " bg-orange-200 text-neutral-600";
      btnclass += " text-neutral-600";
      break;
    default:
      break;
  }

  return (
    <div
      className={`ttnc-alert relative flex items-center text-paragraph-base pr-20 pl-5 pt-4 pb-3 rounded-lg ${classes}`}
    >
      <i className="pe-7s-info text-2xl mr-2"></i>
      {children}
      <ButtonClose className={`absolute top-3 right-4 ${btnclass}`} onClick={onClick} />
    </div>
  );
};
