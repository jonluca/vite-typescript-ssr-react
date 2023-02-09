import React, { FC, useState } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import SubCategoryBadgeList from "components/CategoryBadgeList/SubCategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import NcImage from "components/NcImage/NcImage";
import htmltoText from "utils/htmltoText";
import { useReadingTime } from "react-hook-reading-time";

export interface Card11Props {
  className?: string;
  posts: any;
  ratio?: string;
  hiddenAuthor?: boolean;
  postHref?: any;
  onClick?: () => void;
}

const Card20: FC<Card11Props> = ({
  className = "h-full",
  posts,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
  postHref,
  onClick,
}) => {
  const { title, featured_imghd, href, created_at, category, post } = posts;

  const { text } = useReadingTime(htmltoText(post));

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
      onClick={onClick}
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
            <div
            className={`nc-PostFeaturedMedia relative ${className}`}
            data-nc-id="PostFeaturedMedia"
            >
                <NcImage containerClassName="absolute inset-0" src={featured_imghd} />
            </div>
        </div>
      </div>
      <Link to={postHref} className="absolute inset-0"></Link>
      <span className="absolute top-3 inset-x-3 z-10">
        <SubCategoryBadgeList categories={category} />
      </span>

      <div className="p-4 flex flex-col flex-grow space-y-3">
        
          <div className="text-xs mt-[6px]">
            <span className="text-xs text-neutral-500">{ new Date(created_at).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'}) }</span>
            <span className="mx-2 font-semibold">·</span>
            <span className="text-neutral-700 dark:text-neutral-300">
              {text}
            </span>
          </div>
          <h2 className="nc-card-title block text-[18px] text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <Link to={postHref} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>
          <span className="text-[13px] line-clamp-2">{htmltoText(post)}</span>
        {/* <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <PostCardSaveAction className="relative" postData={post} />
        </div> */}
      </div>
    </div>
  );
};

export default Card20;
