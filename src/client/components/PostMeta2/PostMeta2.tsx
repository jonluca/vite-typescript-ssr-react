import React, { FC, useEffect } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import htmltoText from "utils/htmltoText";
import { useReadingTime } from "react-hook-reading-time";

export interface PostMeta2Props {
  className?: string;
  meta: any;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
}) => {
  const { created_at, authors, post, refauthors } = meta;

  var postsC: any, text: any, location: any, url: any;
  useEffect(() => {

    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL;
    location != url ? postsC = useReadingTime(htmltoText(post)) : postsC = useReadingTime("Test Posts");
    text = postsC;
  }, [])

  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
      data-nc-id="PostMeta2"
    >
      {
        refauthors.id === '153de11c-9ce8-4d79-9d19-c10da778e84c' ?
        <div className="flex items-center space-x-2">
          <Avatar
            radius={avatarRounded}
            sizeClass={
              size === "normal"
                ? "h-6 w-6 text-sm"
                : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
            }
            imgUrl={authors.avatar_url}
            userName={authors.full_name}
          />
        </div>
        :
        <div className="flex items-center space-x-2">
          <Avatar
            radius={avatarRounded}
            sizeClass={
              size === "normal"
                ? "h-6 w-6 text-sm"
                : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
            }
            imgUrl={refauthors.avatar}
            userName={refauthors.name}
          />
        </div>
      }
      <div className="ml-3">
        {
          refauthors.id === '153de11c-9ce8-4d79-9d19-c10da778e84c' ?
          <div className="flex items-center">
            <div className="block font-semibold">
              {authors.full_name}
            </div>
          </div>
          :
          <div className="flex items-center">
            <div className="block font-semibold">
              {refauthors.name}
            </div>
          </div>
        }
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">{ new Date(created_at).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'}) }</span>
          <span className="mx-2 font-semibold">·</span>
          {location != url && <span className="text-neutral-700 dark:text-neutral-300">
            {text}
          </span>}
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
