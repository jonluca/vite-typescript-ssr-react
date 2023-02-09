import React, { FC, ReactNode, useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PostDataType, TaxonomyType } from "data/types";
import { SINGLE } from "data/single";
import SingleContentBlog from "./SingleContentBlog";
import { CommentType } from "components/CommentCard/CommentCard";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "app/hooks";
import { changeCurrentPage } from "app/pages/pages";
import SubSingleHeader from "./SubSingleHeader";
import supabaseClient from "utils/supabaseClient";
import getAuthorSlug from "utils/getAuthorSlug";

export interface PageSingleTemplate3Props {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}

var location: any, url: any;

const PageSingleTemplate3: FC<PageSingleTemplate3Props> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  const { authorslug, postslug } = useParams<any>();

  const [postLoading, setpostLoading] = useState(true);
  const [post, setPost] = useState<any>();
  const [error, setError] = useState<any>();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS

  useEffect(() => {
    console.log(authorslug);
    console.log(postslug);

    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL;

    const authorSlug = getAuthorSlug();
    console.log(authorSlug);

    const fetchPost = async() => {
      const { data, error } = await supabaseClient
        .from('posts')
        .select(`*, authors!inner(*), category!inner(*)`)
        .eq('posttitle', postslug)
        .eq('authors.username', authorSlug)

        if(error) {
          setError(error);
        }

        if(data) {
          setPost(data);
          console.log(data);
          setpostLoading(false);
        }
    }
    fetchPost();
  }, []);

  useEffect(() => {
    dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE }));
    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);

  

  if(error) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar relative text-center pt-40 pb-40 lg:pt-40 lg:pb-40 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
            <div className="container relative py-16 lg:py-20">
              {/* HEADER */}
              <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-7xl md:text-8xl"></h2>
                <h1 className="text-8xl md:text-9xl font-semibold tracking-widest">
                  ERROR
                </h1>
                <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                  Please check your internet connection & refresh the page
                </span>
              </header>
            </div>
        </div>
      </>
    );

  }else if(postLoading == true) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar text-center pt-40 pb-40 lg:pt-40 lg:pb-40 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
          <div className="container relative">
            {/* HEADER */}
            <header className="text-center max-w-2xl mx-auto space-y-7">
              <h2 className="text-7xl md:text-8xl"></h2>
              <h1 className="text-3xl md:text-6xl font-semibold tracking-widest">
                LOADING....
              </h1>
              <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
              </span>
            </header>
          </div>
        </div>
      </>
    );

  }else if(!post[0]) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar text-center pt-30 pb-30 lg:pt-40 lg:pb-40 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
            <div className="container relative py-16 lg:py-20">
              {/* HEADER */}
              <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-6xl md:text-8xl">🪔</h2>
                <h1 className="text-6xl md:text-9xl font-semibold tracking-widest">
                  404
                </h1>
                <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                  THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.{" "}
                </span>
              </header>
            </div>
        </div>
      </>
    );

  }else {  

    return (
      <>
        <div
          className={`nc-PageSingleTemplate3 ${className}`}
          data-nc-id="PageSingleTemplate3"
        >
          <header className="relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black">
            {/* SINGLE HEADER */}
            <div className="dark container relative z-10">
              <div className="max-w-screen-md">
                <SubSingleHeader hiddenDesc pageData={post[0]} />
              </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className="mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
              <div className="hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r"></div>
              <img
                className="block w-full h-full object-cover"
                src={post[0].featured_imghd}
                alt=""
              />
            </div>
          </header>

          {/* SINGLE MAIN CONTENT */}
          <div className="container mt-10">
            <SingleContentBlog data={post[0].post} />
          </div>

          {/* RELATED POSTS */}
          <SingleRelatedPosts category={post[0].category.id} postTitle={post[0].posttitle} />
        </div>
      </>
    );
  }
};

export default PageSingleTemplate3;
