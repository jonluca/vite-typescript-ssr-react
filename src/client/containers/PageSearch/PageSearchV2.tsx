import React, { FC, useState, useEffect } from "react";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import Input from "components/Input/Input";
import HeadBackgroundCommon from "components/HeadBackgroundCommon/HeadBackgroundCommon";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { DEMO_CATEGORIES } from "data/taxonomies";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import { useGlobalContext } from 'utils/context';
import { useParams, useLocation } from "react-router-dom";
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";
import NotFound from "components/NotFound/NotFound";
import getAuthorSlug from "utils/getAuthorSlug";

import supabaseClient from "utils/supabaseClient";
import Card20 from "components/Card20/Card20";
import toTitleCase from "utils/toTitleCase";

export interface PageSearchV2Props {
  className?: string;
}

const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];
const TABS = ["Posts", "Categories"];
var location:any, url: any;

var fetchedPost:any = false, fetchedCat:any = false;
var postsG:any = [], categoryG:any = [];

const PageSearchV2: FC<PageSearchV2Props> = ({ className = "" }) => {
  const { author } = useGlobalContext();
  
  const authorSlug = getAuthorSlug();

  const searchParam = useLocation().search;

  const search = searchParam.replace("?", '').replace(/%20/g, ' ');

  let s = search;

  const [postLoading, setpostLoading] = useState<boolean>(true);
  const [postError, setpostError] = useState<boolean>(false);
  const [catLoading, setcatLoading] = useState<boolean>(true);
  const [catError, setcatError] = useState<boolean>(false);
  const [posts, setPosts] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);
  const [totalData, setTotalData] = useState<any>();

  const [tabActive, setTabActive] = useState<string>(TABS[0]);

  const supabaseSearch = async (table: any, content: any, column: any) => {
    const { data, error } = await supabaseClient
      .from(table)
      .select(content)
      .eq('authors.username', authorSlug)
      .textSearch(column, `'${search}'`)
  
      return { data, error }
  } 
  
  const fetchPost = async() => {
    if(fetchedPost == false) {
      console.log("In post fet")
      
      const { data, error } = await supabaseSearch('posts', `*, authors!inner(*), category!inner(*)`, 'posttitle');

      if(error) {
        throw setpostError(true);
      }

      if (data) {
        fetchedPost = true;
        setTotalData({ length: data.length, type: 'posts' });
        postsG = data;
        setPosts(data);
        console.log(data);
        setpostLoading(false);
      }
    }else {
      setTotalData({ length: posts.length, type: 'posts' });
    }
  }
  
  const fetchCat = async() => {
    if(fetchedCat == false) {
      
    console.log("In cat fet")
      const { data, error } = await supabaseSearch('category', `*, authors!inner(*)`, 'title');

      if(error) {
        throw setcatError(true);
      }

      if (data) {
        fetchedCat = true;
        setTotalData({ length: data.length, type: 'categories' });
        categoryG = data;
        setCategory(data);
        console.log(data);
        setcatLoading(false);
      }
    }else {
      setTotalData({ length: category.length, type: 'categories' });
    }
  }
  
  useEffect(() => {
    console.log("In Eff")

    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL;

    fetchedCat = false;
    setCategory([]);
    fetchedPost = false;
    setPosts([]);

    if(tabActive === 'Categories') {
      console.log("In cat")
      if(categoryG.length === 0) {   
        setcatLoading(true);
        fetchCat() 
      } else {
        setCategory(categoryG);
        setcatLoading(false);
      }  
    }else {
      console.log("In post")
      console.log(postsG)
      if(postsG.length === 0) {  
        setpostLoading(true);
        fetchPost();
      } else {
        setPosts(postsG);
        setpostLoading(false);
      }  
    }
    if(postsG.length === 0 && categoryG.length === 0) {
      fetchPost();
    } else {
      setPosts(postsG);
      setCategory(categoryG);
      setpostLoading(false);
      setcatLoading(false);
    }
    
    //setLoading(false);
  }, [search]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);

    if(item === 'Categories') {
      (categoryG.length === 0) && fetchCat();
    }else {
      (postsG.length === 0) && fetchPost();
    }
  };

  const href = (post: any) => { return location != url ? post.href : null; }

  return (
    <div className={`nc-PageSearchV2 ${className}`} data-nc-id="PageSearchV2">
      <HeadBackgroundCommon className="h-24 2xl:h-28" />
      <Helmet>
        <title>Search || {toTitleCase(author[0].username)}</title>
      </Helmet>
      <div className="container">
        <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
          {
            totalData && (
            
              <span className="block text-center text-lg lg:text-4xl mt-4 text-neutral-500 dark:text-neutral-300">
                We found{" "}
                <strong className="font-semibold text-neutral-800 dark:text-neutral-100">
                  {totalData.length}
                </strong>{" "}
                {totalData.type} for{" "}
                <strong className="font-semibold text-neutral-800 dark:text-neutral-100">
                  "{s}"
                </strong>
              </span> 
           )
          }
        </header>
      </div>
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row ">
            <Nav
              containerClassName="w-full overflow-x-auto hiddenScrollbar"
              className=" sm:space-x-2"
            >
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
            {/* <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div> */}
          </div>

          {/* LOOP ITEMS */}
          {/* LOOP ITEMS POSTS */}
          { tabActive === "Posts" ? 
              (postError) ?
              (
                <Error />
              )
              :
              (postLoading == true) ?
              (
                <div
                  className={`nc-PageSingleTemp4Sidebar text-center pt-40 pb-40 lg:pt-40 lg:pb-40 ${className}`}
                  data-nc-id="PageSingleTemp4Sidebar"
                >
                  {/*  */}
                  
                  <div className="container relative">
                    <Loading />
                  </div>
                </div>
              )
              :
              (posts.length == 0) ?
              (
                <NotFound classname={"text-2xl md:text-2xl"} message="NO POSTS FOUND" />
              )
              : 
              (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">
                  {posts.map((post:any) => (
                    <Card20 key={post.id} posts={post} postHref={'../'+'../'+href(post)} />
                  ))}
                </div>
              )
            :null  
          }

          {/* LOOP ITEMS CATEGORIES */}
          { tabActive === "Categories" ? 
              (catError) ?
              (
                <Error />
              )
              :
              (catLoading == true) ?
              (
                <Loading />
              )
              :
              (category.length == 0) ?
              (
                <NotFound classname={"text-2xl md:text-2xl"} message="NO CATEGORY FOUND" />
              )
              : 
              (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10">
                  {category.map((cat:any) => (
                    <CardCategory2 key={cat.id} taxonomy={cat} />
                  ))}
                </div>
              )
            :null
          }
          {/* LOOP ITEMS TAGS */}
          {/* {tabActive === "Tags" && (
            <div className="flex flex-wrap mt-12 ">
              {tags.map((tag) => (
                <Tag className="mb-3 mr-3" key={tag.id} tag={tag} />
              ))}
            </div>
          )} */}
          {/* LOOP ITEMS POSTS */}
          {/* {tabActive === "Authors" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10">
              {authors.map((author) => (
                <CardAuthorBox2 key={author.id} author={author} />
              ))}
            </div>
          )} */}
        </main>
      </div>
    </div>
  );
};

export default PageSearchV2;
