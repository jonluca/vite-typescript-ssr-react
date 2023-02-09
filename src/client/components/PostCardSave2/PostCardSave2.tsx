import React, { FC } from "react";
import BookmarkContainer from "containers/BookmarkContainer/BookmarkContainer";
import { PostDataType } from "data/types";

export interface PostCardSave2Props
  extends Pick<PostDataType, "id" | "bookmark"> {
  className?: string;
  classBgIcon?: string;
  readingTime: number;
}

const PostCardSave2: FC<PostCardSave2Props> = ({
  className = "dark:text-neutral-300",
  classBgIcon,
  readingTime,
  id,
  bookmark,
}) => {
  return (
    <div
      className={`nc-PostCardSave2 flex items-center space-x-2 text-xs ${className}`}
      data-nc-id="PostCardSave2"
    >
      <span>{readingTime} min read</span>
      <span className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300">
        <BookmarkContainer
          initBookmarked={bookmark.isBookmarked}
          containerClassName={classBgIcon}
          postId={id}
        />
      </span>
    </div>
  );
};

export default PostCardSave2;
