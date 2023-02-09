
import SubCategoryBadgeList from "components/CategoryBadgeList/SubCategoryBadgeList";
import React, { FC } from "react";
import SingleTitle from "./SingleTitle";
import { SinglePageType } from "./PageSingleTemp3Sidebar";
import PostMeta2 from "components/PostMeta2/PostMeta2";
import SubSingleMetaAction2 from "./SubSingleMetaAction2";
import { Helmet } from "react-helmet";
import toTitleCase from "utils/toTitleCase";

export interface SingleHeaderProps {
  pageData: any;
  hiddenDesc?: boolean;
  metaActionStyle?: "style1" | "style2";
  titleMainClass?: string;
  className?: string;
}

const SingleHeaderDemo: FC<SingleHeaderProps> = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = "",
  metaActionStyle = "style1",
}) => {
  const { title, category, authors, refauthors } = pageData;

  return (
    <>
      <Helmet>
        <title>{title} || {toTitleCase(authors.username)}</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <SubCategoryBadgeList itemClass="!px-3" categories={category} />
          <SingleTitle mainClass={titleMainClass} title={title} />
          {/* {!!desc && !hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {desc}
            </span>
          )} */}
          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
            <PostMeta2
              size="large"
              className="leading-none flex-shrink-0"
              meta={pageData}
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
            />
            <SubSingleMetaAction2 meta={pageData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHeaderDemo;
