import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import Avatar from "components/Avatar/Avatar";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface Card14Props {
  className?: string;
  post: PostDataType;
  hoverClass?: string;
  ratio?: string;
}

const Card14: FC<Card14Props> = ({
  className = "h-full",
  ratio = "aspect-w-5 aspect-h-5",
  post,
  hoverClass = "",
}) => {
  const { title, href, featuredImage, categories, author, date, postType } =
    post;

  return (
    <div
      className={`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card14"
    >
      <Link to={href} className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden"
          className="object-cover w-full h-full rounded-3xl "
          src={featuredImage}
        />

        <span className="absolute inset-0 bg-black bg-opacity-40">
          <PostTypeFeaturedIcon
            className="absolute top-4 right-4"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </Link>

      <div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5">
        <CategoryBadgeList itemClass="px-3 py-[6px]" categories={categories} />
      </div>

      <div className="dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow">
        <h2 className="nc-card-title block text-base font-semibold text-white ">
          <Link to={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>

        <div className="p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium">
          <Link
            to={author.href}
            className="relative flex items-center space-x-2"
          >
            <Avatar
              radius="rounded-full"
              containerClassName="ring-2 ring-white"
              sizeClass="h-7 w-7 text-sm"
              imgUrl={author.avatar}
              userName={author.displayName}
            />
            <span className="block text-white truncate">
              {author.displayName}
            </span>
          </Link>
          <>
            <span className=" mx-[6px]">·</span>
            <span className=" font-normal truncate">{date}</span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Card14;
