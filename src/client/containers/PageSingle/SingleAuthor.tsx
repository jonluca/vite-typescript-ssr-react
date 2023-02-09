import Avatar from "components/Avatar/Avatar";
import { PostAuthorType } from "data/types";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface SingleAuthorProps {
  author: PostAuthorType;
}

const SingleAuthor: FC<SingleAuthorProps> = ({ author }) => {
  return (
    <div className="nc-SingleAuthor flex">
      <Link to={author.href}>
        <Avatar
          imgUrl={author.avatar}
          userName={author.displayName}
          sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 "
          radius="rounded-xl"
        />
      </Link>
      <div className="flex flex-col ml-3 max-w-lg sm:ml-5">
        <span className="text-xs text-neutral-400 uppercase tracking-wider">
          WRITEN BY
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          <Link to={author.href}>{author.displayName}</Link>
        </h2>
        <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
          {author.desc}
          <Link className="text-primary-6000 font-medium ml-1" to={author.href}>
            Readmore
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SingleAuthor;
