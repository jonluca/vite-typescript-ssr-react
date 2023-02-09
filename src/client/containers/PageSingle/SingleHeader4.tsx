import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import React, { FC } from "react";
import SingleTitle from "./SingleTitle";
import { SinglePageType } from "./PageSingleTemp3Sidebar";
import PostMeta2 from "components/PostMeta2/PostMeta2";
import SingleMetaAction2 from "./SingleMetaAction2";
import { Helmet } from "react-helmet";
import NcImage from "components/NcImage/NcImage";

export interface SingleHeader4Props {
  pageData: SinglePageType;
  hiddenDesc?: boolean;
  metaActionStyle?: "style1" | "style2";
  titleMainClass?: string;
  className?: string;
}

const SingleHeader4: FC<SingleHeader4Props> = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = "",
  metaActionStyle = "style1",
}) => {
  const { categories, desc, title } = pageData;

  return (
    <>
      <Helmet>
        <title>Single || Blog Magazine React Template</title>
      </Helmet>
      <div className={`nc-SingleHeader4 ${className}`}>
        <div className="max-w-5xl mx-auto space-y-5 dark">
          <CategoryBadgeList itemClass="!px-3" categories={categories} />
          <SingleTitle
            mainClass="text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100"
            title={title}
          />
          {!!desc && !hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {desc}
            </span>
          )}
        </div>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName=" my-10"
          className="object-cover w-full h-full rounded-lg shadow-xl"
          src={pageData.featuredImage}
        />

        <div className=" space-y-10">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
            <PostMeta2
              size="large"
              className="leading-none flex-shrink-0"
              meta={pageData}
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
            />
            <SingleMetaAction2 meta={pageData} />
          </div>
          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
        </div>
      </div>
    </>
  );
};

export default SingleHeader4;
