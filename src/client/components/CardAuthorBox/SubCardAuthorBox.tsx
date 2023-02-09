import React, { FC } from "react";
import { PostAuthorType } from "data/types";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";

export interface CardAuthorBoxProps {
  className?: string;
  author: any;
}

const SubCardAuthorBox: FC<CardAuthorBoxProps> = ({ className = "", author }) => {
 const { full_name, href, avatar_url, username, posts } = author;

  return (
    <NavLink
      to={href}
      className={`nc-CardAuthorBox flex flex-col items-center justify-center text-center sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox"
    >
      <Avatar
        sizeClass="w-20 h-20 text-2xl"
        radius="rounded-full"
        imgUrl={avatar_url}
        userName={full_name}
      />
      <div className={`mt-3 ${(full_name.length <= 6) ? `ml-20 mr-20`: `ml-10 mr-10`}`}>
        <h2 className={`text-base font-medium`}>
          <span className="line-clamp-1">{full_name}</span>
        </h2>
        <span
          className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          @{username}
        </span>
      </div>
      <div className="py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
        {posts} <ArrowRightIcon className="w-5 h-5 text-yellow-600 ml-3" />
      </div>
    </NavLink>
  );
};

export default SubCardAuthorBox;
