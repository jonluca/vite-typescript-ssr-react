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
import SingleHeader4 from "./SingleHeader4";

export interface PageSingleTemp4SidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}

const PageSingleTemp4Sidebar: FC<PageSingleTemp4SidebarProps> = ({
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
        className={`nc-PageSingleTemp4Sidebar relative pt-10 lg:pt-16 ${className}`}
        data-nc-id="PageSingleTemp4Sidebar"
      >
        {/*  */}
        <div className="absolute top-0 inset-x-0 bg-neutral-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]"></div>

        <div className="relative">
          {/* SINGLE HEADER */}
          <header className="container rounded-xl ">
            <SingleHeader4 pageData={SINGLE} />
          </header>

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
      </div>
    </>
  );
};

export default PageSingleTemp4Sidebar;
