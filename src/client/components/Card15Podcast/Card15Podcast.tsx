import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";

export interface Card15PodcastProps {
  className?: string;
  post: PostDataType;
}

const Card15Podcast: FC<Card15PodcastProps> = ({
  className = "h-full",
  post,
}) => {
  const { title, href, featuredImage, postType, date } = post;
  const IS_AUDIO = postType === "audio";

  const renderIcon = (state?: "loading" | "playing") => {
    switch (state) {
      case "loading":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
            ></path>
          </svg>
        );

      case "playing":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.25 6.75V17.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.75 6.75V17.25"
            ></path>
          </svg>
        );

      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
            ></path>
          </svg>
        );
    }
  };

  const renderDefaultBtnListen = (state?: "loading" | "playing") => {
    return (
      <div className="inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200">
          {renderIcon(state)}
        </span>

        <span className="ml-3 text-sm font-medium">
          {state === "playing" ? "Now playing" : "Listen now"}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card15Podcast"
    >
      <div className="w-1/4 flex-shrink-0">
        <Link
          to={href}
          className={`block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg `}
        >
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full "
            src={featuredImage}
            alt={title}
          />
        </Link>
      </div>

      <div className="flex flex-col flex-grow ml-4">
        <h2 className={`nc-card-title block font-semibold text-lg`}>
          <Link
            to={href}
            className={IS_AUDIO ? `line-clamp-1` : "line-clamp-2"}
            title={title}
          >
            {title}
          </Link>
        </h2>
        <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 ">
          {IS_AUDIO ? ` 40 Episode · 110 minutes` : date}
        </span>
      </div>
    </div>
  );
};

export default Card15Podcast;
