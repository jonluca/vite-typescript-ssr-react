import React, { FC, useEffect, useState } from "react";
import Heading from "components/Heading/Heading";
import { PostDataType } from "data/types";
import Card11 from "components/Card11/Card11";
import Card9 from "components/Card9/Card9";
import { DEMO_POSTS } from "data/posts";
import getAuthorSlug from "utils/getAuthorSlug";
import Card20 from "components/Card20/Card20";
import { useGlobalContext } from 'utils/context';
import { useNavigate } from "react-router-dom";

import supabaseClient from "utils/supabaseClient";
import Loading from "components/Loading/Loading";

export interface SingleRelatedPostsProps {
  category?: any;
  postTitle?: any;
}
var location:any, url: any;

const SingleRelatedPosts: FC<SingleRelatedPostsProps> = ({
  category, postTitle
}) => {

  const history = useNavigate();

  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<any>();
  const [relPosts, setrelPosts] = useState<any>();
  const [autPosts, setautPosts] = useState<any>();

  const { author } = useGlobalContext();
  
  const authorSlug = getAuthorSlug();
  
  const supabaseFetch = async (table: any, query: any, type: any, type2: any) => {
    console.log('1');
    const { data, error } = await supabaseClient
      .from(table)
      .select(query)
      .eq(type, authorSlug)
      .eq(type2, category)
      .range(0, 3);

      return {error, data};
  } 

  
  useEffect(() => {

    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL; 
    const fetchPost = async() => {
      // var posts:any = await supabaseFetch('posts', 'title, created_at, featured_imghd, href, authors!inner(*), category!inner(*)', 'authors.username');
      var relposts:any = await supabaseClient
      .from('posts')
      .select('*, authors!inner(*), category!inner(*)')
      .eq('authors.username', authorSlug)
      .eq('category', category)
      .neq('posttitle', postTitle)
      .range(0, 3);

      var autposts:any =  await supabaseClient
      .from('posts')
      .select('*, authors!inner(*), category!inner(*)')
      .eq('authors.username', authorSlug)
      .neq('posttitle', postTitle)
      .neq('category', category)
      .range(0, 3);

      if(relposts.error || autposts.error) {
        console.log('error');
        throw setError(error.message);
      }

      // const posts = await supabaseClient
      //   .from('posts')
      //   .select(`*, authors!inner(*)`)
      //   .eq('authors.username', location)

      // const navigation = await supabaseClient
      //   .from('posts')
      //   .select(`*, authors!inner(*)`)
      //   .eq('authors.username', location)

      console.log(relposts);
      console.log(autposts);
      if(relposts.data && autposts.data) {
        console.log('3');
        setrelPosts(relposts.data);
        setautPosts(autposts.data);
        console.log(relposts);
        console.log(autposts);
        setLoading(false);
      }
    }
    console.log(authorSlug);
    console.log(category);
    
    fetchPost();
    
    //setLoading(false);
  }, []);

  const href = (post: any) => { return location != url ? post.href : author.username+post.href; }

  if(error) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar relative text-center pt-40 pb-40 lg:pt-40 lg:pb-40`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
            <div className="container relative py-16 lg:py-20">
              {/* HEADER */}
              <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-2xl md:text-2xl"></h2>
                <h1 className="text-2xl md:text-2xl font-semibold tracking-widest">
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

  }else if(loading == true) {

    return (
      <div className="py-10">
        <Loading size={20}/>
      </div>
    );

  }else if(relPosts.length == 0 &&  autPosts.length == 0) {

    return null;

  }else {
    return (
      <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
        {/* RELATED  */}
        <div className="container">
          {
            relPosts.length > 0 && <div>
              <Heading
                className="mb-10 text-neutral-900 dark:text-neutral-50"
                desc=""
              >
                Related posts
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {relPosts.map((post:any, index:any) => (
                  <Card20 onClick={() => window.location.reload()} key={index} posts={post} postHref={'../'+'../'+href(post)} />
                ))}
              </div>
            </div>
          }
    
          {/* MORE FROM AUTHOR */}
          {
            autPosts.length > 0 && <div className="mt-20">
              <Heading
                className="mb-10 text-neutral-900 dark:text-neutral-50"
                desc=""
              >
                More from author
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {autPosts.map((post:any, index:any) => (
                  <Card9 onClick={() => { history('../'+'../'+href(post));typeof window !== "undefined" && window.location.reload() }} key={index} posts={post} postHref={'../'+'../'+href(post)} />
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

 
};

export default SingleRelatedPosts;
