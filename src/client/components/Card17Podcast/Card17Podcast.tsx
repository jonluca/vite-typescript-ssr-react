import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";

export interface Card17PodcastProps {
  className?: string;
  post: PostDataType;
}

const Card17Podcast: FC<Card17PodcastProps> = ({ className = "", post }) => {
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
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
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
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
      <span className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer">
        {renderIcon(state)}
      </span>
    );
  };

  return (
    <div
      className={`nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="Card17Podcast"
    >
      <Link to={href} className="flex  items-center space-x-4">
        <div className="block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg">
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full "
            src={featuredImage}
            alt={title}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h2 className={`block font-semibold text-lg`}>
            <span className="line-clamp-1" title={title}>
              {title}
            </span>
          </h2>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {IS_AUDIO ? `  40 Episode · 110 minutes` : date}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card17Podcast;
