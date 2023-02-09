import React, { FC } from "react";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import { CardAuthor2Props } from "./CardAuthor2";

export interface CardAuthor2WhiteProps extends CardAuthor2Props {}

const CardAuthor2White: FC<CardAuthor2WhiteProps> = ({
  className = "",
  author,
  readingTime,
  date,
}) => {
  const { displayName, href = "/", avatar } = author;
  return (
    <Link
      to={href}
      className={`nc-CardAuthor2White relative inline-flex items-center ${className}`}
      data-nc-id="CardAuthor2White"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        imgUrl={avatar}
        userName={displayName}
      />
      <div>
        <h2
          className={`text-sm text-neutral-200 hover:text-white dark:text-neutral-700 dark:hover:text-black font-medium`}
        >
          {displayName}
        </h2>
        <span
          className={`flex items-center mt-1 text-xs text-neutral-300 dark:text-neutral-700`}
        >
          <span>{date}</span>
          {readingTime && (
            <>
              <span className="mx-1 opacity-0 group-hover:opacity-100 transition-opacity">
                ·
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                {readingTime} min read
              </span>
            </>
          )}
        </span>
      </div>
    </Link>
  );
};

export default CardAuthor2White;
