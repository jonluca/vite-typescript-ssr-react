import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import SubCategoryBadgeList from "components/CategoryBadgeList/SubCategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import htmltoText from "utils/htmltoText";
import { useReadingTime } from "react-hook-reading-time";

export interface Card9Props {
  className?: string;
  ratio?: string;
  posts: any;
  post?: any;
  hoverClass?: string;
  postHref?: any;
  onClick?: () => void;
}

const Card9: FC<Card9Props> = ({
  className = "h-full",
  ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
  posts,
  hoverClass = "",
  postHref,
  onClick
}) => {
  const { title, featured_imgsd, href, created_at, category, post } = posts;

    const { text } = useReadingTime(htmltoText(post));

  const renderMeta = () => {
    return (
      <div className="inline-flex items-center text-xs text-neutral-300">
        <div className="block ">
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2" title={title}>
              {title}
            </span>
          </h2>
          <div className="flex mt-2.5 text-white relative">
            {/* <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {author.displayName}
            </span> */}
            <span className="text-xs">{ new Date(created_at).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'}) }</span>
            <span className="mx-2 font-semibold">·</span>
            <span className="dark:text-neutral-300">
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card9 relative flex flex-col group rounded-3xl cursor-pointer overflow-hidden z-0 ${hoverClass} ${className}`}
      data-nc-id="Card9"
      onClick={onClick}
    >
      {/* <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <PostCardLikeAndComment className="relative" postData={post} />
        <PostCardSaveAction className="relative" postData={post} />
      </div> */}
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      <div>
        <NcImage
          containerClassName="absolute inset-0 rounded-3xl"
          className="object-cover w-full h-full rounded-3xl"
          src={featured_imgsd}
        />
        {/* <PostTypeFeaturedIcon
          className="absolute top-3 left-3 group-hover:hidden"
          postType={postType}
          wrapSize="w-7 h-7"
          iconSize="w-4 h-4"
        /> */}
        <span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
      {/* <Link
        to={postHref}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
      ></Link> */}
      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        {/* <Link to={postHref} className="absolute inset-0"></Link> */}
        <div className="mb-3">
          <SubCategoryBadgeList categories={category} />
        </div>
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card9;
