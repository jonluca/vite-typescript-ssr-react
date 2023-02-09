import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import { DEMO_POSTS } from "data/posts";
import { PostDataType, TaxonomyType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import PostPagination from "components/Pagination/PostPagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "components/NcImage/NcImage";
import Card20 from "components/Card20/Card20";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import supabaseClient from "utils/supabaseClient";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { XIcon } from "@heroicons/react/solid";
import toTitleCase from "utils/toTitleCase";
import Loading from "components/Loading/Loading";
import getAuthorSlug from "utils/getAuthorSlug";

export interface PageArchiveProps {
  className?: string;
}

var inPage:any = 0, fnPage:any = 10, postsLoc:any = [];

var location:any, url: any;

const PageArchive: FC<PageArchiveProps> = ({ className = "" }) => {
  const PAGE_DATA: TaxonomyType = DEMO_CATEGORIES[0];

  const { authorslug, categoryslug } = useParams<any>();

  const [btnLoading, setbtnLoading] = useState<any>(false);
  const [loading, setLoading] = useState(true);
  const [postLoading, setpostLoading] = useState<any>(false);
  const [author, setAuthor] = useState<any>();
  const [post, setPost] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [error, setError] = useState<any>();
  const [currentPage, setcurrentPage] = useState<any>(1);
  const [postsperPage, setpostsperPage] = useState<any>(10);
  const [snackMsg, setsnackMsg] = useState<any>("");
  const [snackDuration, setsnackDuration] = useState<any>();
  const [snackStatus, setsnackStatus] = useState<any>(false);

  const authorSlug = getAuthorSlug();

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  const supabaseFetch = async () => { 
    
    const supabaseData = await supabaseClient
      .from('posts')
      .select('*, category!inner(*), authors!inner(*)')
      .eq('authors.username', authorSlug)
      .eq('category.title', categoryslug)
      .range(inPage, fnPage);

    return supabaseData; 
  }

  const fetchPost = async() => {
      inPage = 0; fnPage = 10;
      supabaseFetch().then(async ({data,error}) => { 
        if(error) {
          setError(error);
        }
  
        if(data?.length == 0) {
          setPost([]);
          const { data, error } = await supabaseClient
            .from('category')
            .select(`*, authors!inner(*)`)
            .eq('title', categoryslug)
            .eq('authors.username', authorSlug)
            if(error) {
              setError(error);
            }
            if(data) {
              console.log(data);
              setCategory(data[0]);
              setLoading(false);
  
            }
        }else if(data) {
          postsLoc = data;
          setPost(postsLoc);
          setAuthor(data[0].authors);
          setCategory(data[0].category);
          console.log(data);
          setLoading(false);
        }
      });
    
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setsnackStatus(false);
  };

  const snackAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        
        <XIcon className={`w-5 h-5`} />
      </IconButton>
    </>
  );


  useEffect(() => {
    console.log("In useeffect");
    console.log(author);
    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL;
    fetchPost();
  }, []);

  const fetchNxtPost = async () => {
    inPage = inPage + 10;
    fnPage = fnPage + 10;
    
    console.log(inPage);
    console.log(fnPage);

    supabaseFetch().then(async ({data,error}) => { 
      if(error) {
        setsnackMsg(error.message);
        throw setsnackStatus(true);
      }

      if(data.length > 0) {
        console.log(data);
        postsLoc = [...postsLoc, ...data];
        // localStorage.setItem('postsLoc', JSON.stringify(newPosts));
        // localStorage.setItem('initpostRange', iPage);
        // localStorage.setItem('finpostRange', fPage);

        // var npostsLoc:any = JSON.parse(localStorage.getItem('postsLoc')!);
        console.log(postsLoc);
        setPost(postsLoc);
        setbtnLoading(false);

      }else {
        setbtnLoading(false);
        setsnackMsg("No Posts to show");
        setsnackStatus(true);

      }
    });

    // const {data,error} = await supabaseClient
    //   .from('posts')
    //   .select('title, created_at, featured_imghd, href, authors!inner(*), category!inner(*)')
    //   .eq('authors.username', location)
    //   .range(inPage, fnPage);

    //   if(error) {
    //     setsnackMsg(error.message);
    //     throw setsnackStatus(true);
    //   }

    //   if(data.length > 0) {
    //     console.log(data);
    //     postsLoc = [...postsLoc, ...data];
    //     // localStorage.setItem('postsLoc', JSON.stringify(newPosts));
    //     // localStorage.setItem('initpostRange', iPage);
    //     // localStorage.setItem('finpostRange', fPage);

    //     // var npostsLoc:any = JSON.parse(localStorage.getItem('postsLoc')!);
    //     console.log(postsLoc);
    //     setPost(postsLoc);
    //     setbtnLoading(false);

    //   }else {
    //     setbtnLoading(false);
    //     setsnackMsg("No Posts to show");
    //     setsnackStatus(true);

    //   }

  }

  const setPosts = () => {
    setbtnLoading(true);
    fetchNxtPost();
  }

  const href = (post: any) => { return location != url ? post.href : author.username+post.href; }
 

  if(error) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar relative text-center pt-10 lg:pt-16 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
            <div className="container relative py-16 lg:py-20">
              {/* HEADER */}
              <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-7xl md:text-8xl"></h2>
                <h1 className="text-7xl md:text-7xl font-semibold tracking-widest">
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

  }else if(loading) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar relative text-center pt-40 pb-40 lg:pt-40 pb-40 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
          <div className="container relative">
            <Loading />
          </div>
        </div>
      </>
    );

  }else if(!category) {

    return (
      <>
        <div
          className={`nc-PageSingleTemp4Sidebar relative text-center pt-10 lg:pt-16 ${className}`}
          data-nc-id="PageSingleTemp4Sidebar"
        >
          {/*  */}
          
            <div className="container relative py-16 lg:py-20">
              {/* HEADER */}
              <header className="text-center max-w-2xl mx-auto space-y-7">
                <h2 className="text-7xl md:text-8xl">🪔</h2>
                <h1 className="text-8xl md:text-9xl font-semibold tracking-widest">
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
    const lastIndex = currentPage * postsperPage;
    const firstIndex = lastIndex - postsperPage;
    const currentPosts = post.slice(firstIndex, lastIndex);


    return (
      <div
        className={`nc-PageArchive overflow-hidden ${className}`}
        data-nc-id="PageArchive"
      >
        <Helmet>
          <title>Category || {toTitleCase(author.username)}</title>
        </Helmet>
  
        {/* HEADER */}
        <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
          <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 overflow-hidden ">
            <NcImage
              containerClassName="absolute inset-0"
              src={category.featured_imghd}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
              <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
                {category.name}
              </h2>
              
              <span className="block mt-4 text-neutral-300">
                {category.posts} Posts
              </span>
            
            </div>
          </div>
        </div>
        {/* ====================== END HEADER ====================== */}
        {
          
          post.length === 0 ? (
            <div className="container py-16 text-center">
              <h1 className="text-3xl md:text-3xl font-semibold tracking-widest">
                NO POSTS
              </h1>
            </div>
          ) : (
            <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
              
              <div>
                {
                  (error) ?
                  (
                      <>
                        <div
                          className={`nc-PageSingleTemp4Sidebar pt-5 lg:pt-5`}
                          data-nc-id="PageSingleTemp4Sidebar"
                        >
                          {/*  */}
                          
                            <div className="container">
                              {/* HEADER */}
                              <header className="text-center max-w-2xl mx-auto space-y-7">
                                <h2 className="text-7xl md:text-8xl"></h2>
                                <h1 className="text-2xl md:text-2xl font-semibold tracking-widest">
                                  ERROR
                                </h1>
                                <span className="block text-1xl text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                                  Please check your internet connection & refresh the page
                                </span>
                              </header>
                            </div>
                        </div>
                      </>
                  )
                  :
                  (postLoading == true) ?
                  (
                    <Loading size={20}/>
                  )
                  :
                  (
                    <>
                    {/* LOOP ITEMS */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                      {
                        post.map((post:any, index:any) => (
                          <Card20 key={index} posts={post} postHref={'../'+'../'+href(post)} />
                        ))
                      }
                    </div>
          
                    {/* PAGINATIONS */}
                    
                    {
                      (postsLoc.length > 10) && (
                        <div className="flex mt-20 justify-center items-center">
                          <ButtonPrimary loading={btnLoading} onClick={setPosts}>Show me more</ButtonPrimary>
                        </div>
                      ) 
                    }
                    </>

                  )
                }
      
              </div>
      
              {/* MORE SECTIONS */}
              {/* === SECTION 5 === */}
              {/* <div className="relative py-16">
                <BackgroundSection />
                <SectionGridCategoryBox
                  categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
                />
                <div className="text-center mx-auto mt-10 md:mt-16">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </div> */}
      
              {/* === SECTION 5 === */}
              {/* <SectionSliderNewAuthors
                heading="Top elite authors"
                subHeading="Discover our elite writers"
                authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
                uniqueSliderClass="PageArchive"
              />
      
              <SectionSubscribe2 /> */}
            </div>

          )
        }
        <Snackbar
          open={snackStatus}
          autoHideDuration={snackDuration}
          onClose={handleClose}
          action={snackAction}
          message={snackMsg}
        />
  
      </div>
    );

  }
};

export default PageArchive;
