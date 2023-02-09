import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "data/types";
import { SINGLE } from "data/single";
import SingleContent from "./SingleContent";
import { CommentType } from "components/CommentCard/CommentCard";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "app/hooks";
import { changeCurrentPage } from "app/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleHeader from "./SingleHeader";

export interface PageSingleTemp3SidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}

const PageSingleTemp3Sidebar: FC<PageSingleTemp3SidebarProps> = ({
  className = "",
}) => {
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
        className={`nc-PageSingleTemp3Sidebar ${className}`}
        data-nc-id="PageSingleTemp3Sidebar"
      >
        <header className="relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black">
          {/* SINGLE HEADER */}
          <div className="dark container relative z-10">
            <div className="max-w-screen-md">
              <SingleHeader
                hiddenDesc
                metaActionStyle="style2"
                pageData={SINGLE}
              />
            </div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
            <div className="hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r"></div>
            <img
              className="block w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554941068-a252680d25d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
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
    </>
  );
};

export default PageSingleTemp3Sidebar;
