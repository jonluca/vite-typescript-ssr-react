import { TwMainColor } from "data/types";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface BadgeProps {
  className?: string;
  name: ReactNode;
  color?: TwMainColor;
  href?: string;
}

const Badge: FC<BadgeProps> = ({
  className = "relative",
  name,
  color = "blue",
  href,
}) => {
  const getColorClass = (hasHover = true) => {
    switch (color) {
      case "pink":
        return `text-pink-800 bg-pink-100 ${
          hasHover ? "hover:bg-pink-800" : ""
        }`;
      case "red":
        return `text-red-800 bg-red-100 ${hasHover ? "hover:bg-red-800" : ""}`;
      case "gray":
        return `text-gray-800 bg-gray-100 ${
          hasHover ? "hover:bg-gray-800" : ""
        }`;
      case "green":
        return `text-green-800 bg-green-100 ${
          hasHover ? "hover:bg-green-800" : ""
        }`;
      case "purple":
        return `text-purple-800 bg-purple-100 ${
          hasHover ? "hover:bg-purple-800" : ""
        }`;
      case "indigo":
        return `text-indigo-800 bg-indigo-100 ${
          hasHover ? "hover:bg-indigo-800" : ""
        }`;
      case "yellow":
        return `text-yellow-800 bg-yellow-100 ${
          hasHover ? "hover:bg-yellow-800" : ""
        }`;
      case "blue":
        return `text-blue-800 bg-blue-100 ${
          hasHover ? "hover:bg-blue-800" : ""
        }`;
      default:
        return `text-pink-800 bg-pink-100 ${
          hasHover ? "hover:bg-pink-800" : ""
        }`;
    }
  };

  const CLASSES =
    "nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs " +
    className;
  return !!href ? (
    <Link
      to={href || ""}
      className={`transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`}
    >
      {name}
    </Link>
  ) : (
    <span className={`${CLASSES} ${getColorClass(false)} `}>{name}</span>
  );
};

export default Badge;
