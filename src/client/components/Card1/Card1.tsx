import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import { PostDataType } from "data/types";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";

export interface Card1Props {
  className?: string;
  post: PostDataType;
}

const Card1: FC<Card1Props> = ({ className = "", post }) => {
  const { author, title, href, readingTime, id } = post;
  return (
    <div
      className={`nc-Card1 relative min-h-[95px] p-4 flex flex-row hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg group border-neutral-100 dark:border-neutral-800 ${className}`}
      data-nc-id="Card1"
      data-nc-post-id={id}
    >
      <Link to={href} className="absolute inset-0 rounded-lg"></Link>

      <div className="flex-shrink-0 pt-1 pr-3">
        <Avatar imgUrl={author.avatar} userName={author.displayName} />
      </div>
      <div className="flex-grow">
        <h2
          className="nc-card-title block text-base font-semibold text-neutral-800 dark:text-neutral-100"
          title={title}
        >
          <Link to={href} className="line-clamp-2">
            {title}
          </Link>
        </h2>
        <PostCardMeta className="mt-3" hiddenAvatar meta={post} />
      </div>

      {/* ACTIONS */}
      <PostCardSaveAction
        className="absolute z-10 hidden group-hover:flex dark:text-neutral-300 pl-3 bg-neutral-100 dark:bg-neutral-800 bottom-2 right-2.5 rounded-lg"
        postData={post}
        readingTime={readingTime}
        classBgIcon="h-8 w-8 bg-neutral-200 dark:bg-neutral-700"
      />
    </div>
  );
};

export default Card1;
