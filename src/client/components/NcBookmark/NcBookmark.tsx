import React, { FC } from "react";
import twFocusClass from "utils/twFocusClass";
import { PostDataType } from "data/types";

export interface NcBookmarkProps {
  containerClassName?: string;
  iconClass?: string;
  isBookmarked: boolean;
  postId: PostDataType["id"];
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const NcBookmark: FC<NcBookmarkProps> = ({
  containerClassName = "h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",
  isBookmarked,
  postId,
  onClick = () => {},
}) => {
  return (
    <button
      className={`nc-NcBookmark relative rounded-full flex items-center justify-center ${twFocusClass()} ${containerClassName}`}
      data-nc-id="NcBookmark"
      data-nc-bookmark-post-id={postId}
      onClick={onClick}
      title="Save to reading list"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          aria-hidden="true"
          fill={isBookmarked ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
        ></path>
      </svg>
    </button>
  );
};

export default NcBookmark;
