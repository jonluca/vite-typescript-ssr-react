import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export interface NcLinkProps extends LinkProps {
  className?: string;
  colorClass?: string;
}

const NcLink: FC<NcLinkProps> = ({
  className = "font-medium",
  colorClass = "text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000",
  children,
  ...args
}) => {
  return (
    <Link
      className={`nc-NcLink ${colorClass} ${className}`}
      data-nc-id="NcLink"
      {...args}
    >
      {children}
    </Link>
  );
};

export default NcLink;
