import React, { FC } from "react";
import { TaxonomyType } from "data/types";
import { Link } from "react-router-dom";

export interface CardTagBoxProps {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardTagBox: FC<CardTagBoxProps> = ({ className = "", taxonomy }) => {
  const { count, name, href = "/" } = taxonomy;
  return (
    <Link
      to={href}
      className={`nc-CardTagBox relative flex items-center p-3 sm:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
      data-nc-id="CardTagBox"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
        <i className="las la-hashtag text-3xl"></i>
      </div>
      <div className="ml-4 flex-grow overflow-hidden">
        <h2 className="text-base font-medium">
          <span className="line-clamp-1">{name}</span>
        </h2>
        <span
          className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          {count} Articles
        </span>
      </div>
    </Link>
  );
};

export default CardTagBox;
