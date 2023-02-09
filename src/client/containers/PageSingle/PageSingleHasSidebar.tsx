import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "data/types";
import NcImage from "components/NcImage/NcImage";
import { SINGLE } from "data/single";
import SingleContent from "./SingleContent";
import { CommentType } from "components/CommentCard/CommentCard";
import { useAppDispatch } from "app/hooks";
import { changeCurrentPage } from "app/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleRelatedPosts from "./SingleRelatedPosts";
import SingleHeader from "./SingleHeader";

export interface PageSingleHasSidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}

const PageSingleHasSidebar: FC<PageSingleHasSidebarProps> = ({
  className = "",
}) => {
  // DEMO DATA
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS
  useEffect(() => {
    dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE }));
    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);

  return (
    <>
      <div
        className={`nc-PageSingleHasSidebar pt-10 lg:pt-16 ${className}`}
        data-nc-id="PageSingleHasSidebar"
      >
        {/* SINGLE HEADER */}
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader pageData={SINGLE} />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName="container my-10 sm:my-12"
          className="object-cover w-full h-full rounded-xl"
          src={SINGLE.featuredImage}
        />

        {/* SINGLE MAIN CONTENT */}
        <div className="container flex flex-col my-10 lg:flex-row ">
          <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-20">
            <SingleContent data={SINGLE} />
          </div>
          <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3">
            <Sidebar />
          </div>
        </div>

        {/* RELATED POSTS */}
        <SingleRelatedPosts />
      </div>
    </>
  );
};

export default PageSingleHasSidebar;
