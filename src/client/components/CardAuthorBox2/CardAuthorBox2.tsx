import React, { FC } from "react";
import { PostAuthorType } from "data/types";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import NcImage from "components/NcImage/NcImage";

export interface CardAuthorBox2Props {
  className?: string;
  author: PostAuthorType;
}

const CardAuthorBox2: FC<CardAuthorBox2Props> = ({
  className = "",
  author,
}) => {
  const { displayName, href = "/", avatar, jobName, count, bgImage } = author;
  return (
    <NavLink
      to={href}
      className={`nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox2"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0"
            src={bgImage}
          />
        </div>
        <div className="absolute top-3 inset-x-3 flex">
          <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
            {count} <ArrowRightIcon className="w-5 h-5 text-yellow-600 ml-3" />
          </div>
        </div>
      </div>

      <div className="-mt-8 m-8 text-center">
        <Avatar
          containerClassName="ring-2 ring-white"
          sizeClass="w-16 h-16 text-2xl"
          radius="rounded-full"
          imgUrl={avatar}
          userName={displayName}
        />
        <div className="mt-3">
          <h2 className={`text-base font-medium`}>
            <span className="line-clamp-1">{displayName}</span>
          </h2>
          <span
            className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
          >
            @{jobName}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default CardAuthorBox2;
