import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import SocialsShare from "components/SocialsShare/SocialsShare";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface Card12Props {
  className?: string;
  post: PostDataType;
}

const Card12: FC<Card12Props> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage, desc, postType } = post;

  return (
    <div
      className={`nc-Card12 group relative flex flex-col ${className}`}
      data-nc-id="Card12"
    >
      <Link
        to={href}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage}
          alt={title}
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute bottom-2 left-2"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </Link>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link to={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2"> {desc}</span>
        </span>
        <PostCardMeta className="mt-5" meta={post} />
      </div>
    </div>
  );
};

export default Card12;
