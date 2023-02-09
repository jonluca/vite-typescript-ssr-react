import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import SocialsShare from "components/SocialsShare/SocialsShare";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import SubCardAuthor2 from "components/CardAuthor2/SubCardAuthor2";
import SubCategoryBadgeList from "components/CategoryBadgeList/SubCategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import htmltoText from "utils/htmltoText";
import { useReadingTime } from "react-hook-reading-time";

export interface Card2Props {
  className?: string;
  posts: any;
  size?: "normal" | "large";
}

const Card2: FC<Card2Props> = ({
  className = "h-full",
  size = "normal",
  posts,
}) => {
  const { title, featured_imghd, href, created_at, category, post, authors, refauthors } = posts;

  const { text } = useReadingTime(htmltoText(post));

  const date = new Date(created_at).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'}) ;

  return (
    <div
      className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card2"
    >
      <span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden">
        <NcImage
          containerClassName="absolute inset-0"
          src={featured_imghd}
          alt={title}
        />
        {/* <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postType}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        /> */}
      </span>

      {/* <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" /> */}
      <Link to={href} className="absolute inset-0" />

      <div className="p-4 sm:p-5 flex flex-col">
        <div className="space-y-3">
          <SubCategoryBadgeList categories={category} />
          <h2
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
              size === "large" ? "text-lg sm:text-2xl" : "text-base"
            }`}
          >
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>
          {/* <span className="block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
            {desc}
          </span> */}
        </div>
        <SubCardAuthor2 className="relative my-4" type={refauthors.id === '153de11c-9ce8-4d79-9d19-c10da778e84c' ? 'authors': 'refauthors'} author={refauthors.id === '153de11c-9ce8-4d79-9d19-c10da778e84c' ? authors : refauthors} date={date} />
        {/* <div className="flex items-center justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <PostCardSaveAction
            className="relative"
            postData={post}
            readingTime={text}
          />
        </div> */}
        <span className="text-[13px] block text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-3">{htmltoText(post)}</span>
      </div>
    </div>
  );
};

export default Card2;
