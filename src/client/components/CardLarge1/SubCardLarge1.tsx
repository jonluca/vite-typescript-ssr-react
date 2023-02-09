import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import { PostDataType } from "data/types";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import SubCardAuthor2 from "components/CardAuthor2/SubCardAuthor2";
import SubCategoryBadgeList from "components/CategoryBadgeList/SubCategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface CardLarge1Props {
  className?: string;
  post: any;
  postLength: number;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}

const SubCardLarge1: FC<CardLarge1Props> = ({
  className = "",
  post,
  postLength,
  onClickNext = () => {},
  onClickPrev = () => {},
}) => {
  const { featured_imghd, title, created_at, category, authors, href } =
    post;

  const date = new Date(created_at).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'}) ;

  return (
    <div
      className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse group  justify-end ${className}`}
    >
      <div className="z-10 w-full -mt-8 px-3 sm:px-6 lg:w-1/2 xl:w-2/5">
        <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 -- nc-dark-box-bg">
          <SubCategoryBadgeList categories={category} />

          <h2 className="nc-card-title text-xl sm:text-2xl font-semibold ">
            <Link to={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>

          <SubCardAuthor2 className="relative" author={authors} date={date} />

          {/* <div className="flex items-center justify-between mt-auto">
            <PostCardLikeAndComment postData={post} />
            <PostCardSaveAction
              classBgIcon="h-8 w-8 bg-neutral-50 bg-opacity-20 hover:bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-30 dark:hover:bg-opacity-50"
              postData={post}
              readingTime={readingTime}
            />
          </div> */}
        </div>
        {/* {
            postLength > 1 && (
                <div className="p-4 sm:pt-8 sm:px-10">
                    <NextPrev
                    btnClassName="w-11 h-11 text-xl"
                    onClickNext={onClickNext}
                    onClickPrev={onClickPrev}
                    />
                </div>
            )
        } */}
      </div>
      <div className="w-full lg:w-2/3">
        <Link to={href} className="nc-CardLarge1__right block relative">
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 2xl:aspect-h-9 relative"
            className="absolute inset-0 object-cover rounded-3xl"
            src={featured_imghd}
            alt={title}
          />
          {/* META TYPE */}
          {/* <PostTypeFeaturedIcon
            postType={post.postType}
            className="absolute w-8 h-8 md:w-10 md:h-10 right-6 top-6"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default SubCardLarge1;
