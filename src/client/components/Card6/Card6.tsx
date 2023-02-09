import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface Card6Props {
  className?: string;
  post: PostDataType;
}

const Card6: FC<Card6Props> = ({ className = "h-full", post }) => {
  const { title, href, readingTime, featuredImage, categories, postType } =
    post;

  return (
    <div
      className={`nc-Card6 relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card6"
    >
      <Link to={href} className="absolute inset-0 z-0"></Link>
      <div className="flex flex-col flex-grow">
        <div className="space-y-3 mb-4">
          <CategoryBadgeList categories={categories} />
          <h2 className={`block font-semibold text-base`}>
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>
          <PostCardMeta meta={{ ...post }} />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <PostCardSaveAction
            className="relative"
            postData={post}
            readingTime={readingTime}
          />
        </div>
      </div>

      <Link
        to={href}
        className={`block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 `}
      >
        <NcImage
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full"
          src={featuredImage}
          alt={title}
        />
        <span className="absolute bottom-1 left-1">
          <PostTypeFeaturedIcon
            wrapSize="h-7 w-7"
            iconSize="h-4 w-4"
            postType={postType}
          />
        </span>
      </Link>
    </div>
  );
};

export default Card6;
