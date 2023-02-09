import React, { FC, ReactNode, useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PostDataType, TaxonomyType } from "data/types";
import NcImage from "components/NcImage/NcImage";
import { SINGLE } from "data/single";
import SingleContentBlog from "./SingleContentBlog";
import { CommentType } from "components/CommentCard/CommentCard";
import { useAppDispatch } from "app/hooks";
import { changeCurrentPage } from "app/pages/pages";
import SubSingleHeader from "./SubSingleHeader";
import SingleRelatedPosts from "./SingleRelatedPosts";
import supabaseClient from "utils/supabaseClient";
import SocialsShare from "components/SocialsShare/SocialsShare";
import Avatar from "components/Avatar/Avatar";
import getAuthorSlug from "utils/getAuthorSlug";

export interface PageSingleTemplate2Props {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}

const PageSingleTemplate2: FC<PageSingleTemplate2Props> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  const { authorslug, postslug } = useParams<any>();

  const [postLoading, setpostLoading] = useState(true);
  const [post, setPost] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    console.log(authorslug);
    console.log(postslug);

    const authorSlug = getAuthorSlug();
    console.log(authorSlug);

    const fetchPost = async () => {
      const { data, error } = await supabaseClient
        .from("posts")
        .select(`*, authors!inner(*), category!inner(*)`)
        .eq("posttitle", postslug)
        .eq("authors.username", authorSlug);

      if (error) {
        setError(error);
      }

      if (data) {
        setPost(data);
        console.log(data);
        setpostLoading(false);
      }
    };
    fetchPost();
  }, []);

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS
  useEffect(() => {
    dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE }));
    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);

  if (error) {
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
  } else if (postLoading == true) {
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
              <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium"></span>
            </header>
          </div>
        </div>
      </>
    );
  } else if (!post[0]) {
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
  } else {
    return (
      <>
        <div
          className={`nc-PageSingleTemplate2 pt-8 lg:pt-16 ${className}`}
          data-nc-id="PageSingleTemplate2"
        >
          <div>
            {/* SINGLE HEADER */}
            <header className="container rounded-xl">
              <div className="max-w-screen-md mx-auto">
                <SubSingleHeader hiddenDesc pageData={post[0]} />
              </div>
            </header>

            {/* FEATURED IMAGE */}
            <div className="">
              <NcImage
                containerClassName="my-10 sm:my-12 relative aspect-w-16 aspect-h-12 md:aspect-h-9 lg:aspect-h-6"
                className="absolute inset-0 object-cover w-full h-full"
                src={post[0].featured_imghd}
              />
            </div>
            {/* SINGLE MAIN CONTENT */}
            <div className="container">
              <SingleContentBlog data={post[0].post} />
            </div>

            {/* RELATED POSTS */}
            <SingleRelatedPosts
              category={post[0].category.id}
              postTitle={post[0].posttitle}
            />
          </div>
        </div>
      </>
    );
  }
};

export default PageSingleTemplate2;
