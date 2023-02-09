import React, {useState, useEffect, Fragment} from "react";
import Loading from "components/Loading/Loading";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionVideos from "./SectionVideos";
import SectionLargeSlider from "./SectionLargeSlider";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SubSectionGridAuthorBox from "components/SectionGridAuthorBox/SubSectionGridAuthorBox";
import { PostDataType, TaxonomyType } from "data/types";
import {
  DEMO_POSTS,
} from "data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SubSectionSliderNewCategories from "components/SectionSliderNewCategories/SubSectionSliderNewCategories";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useGlobalContext } from 'utils/context';
import Card20 from "components/Card20/Card20";
import ButtonPrimary from "components/Button/ButtonPrimary";
import supabaseClient from "utils/supabaseClient";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { XIcon } from "@heroicons/react/solid";
import Select from "components/Select/Select";
import Heading from "components/Heading/Heading";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import ButtonDropdown from "components/ButtonDropdown/ButtonDropdown";
import toTitleCase from "utils/toTitleCase";
import getAuthorSlug from "utils/getAuthorSlug";
//
var inPage:any = 0, fnPage:any = 10, postsLoc:any = [], icPage:any = 0, fcPage:any = 0, catVal: any = "-1", maxPost: any = 10;

var location:any, url: any;

const PageHome: React.FC = () => {
  const { author, post, navigation, initpostRange, finpostRange } = useGlobalContext();

  const [btnLoading, setbtnLoading] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>();
  const [catLoading, setcatLoading] = useState<any>(true);
  const [catError, setcatError] = useState<any>();
  const [snackMsg, setsnackMsg] = useState<any>("");
  const [snackDuration, setsnackDuration] = useState<any>();
  const [snackStatus, setsnackStatus] = useState<any>(false);
  const [categories, setCategories] = useState<any>([]);
  
  const [categoryList, setcategoryList] = useState<any>(catVal);
  const [categoryListL, setcategoryListL] = useState<any>("All");
  const authorSlug = getAuthorSlug();

  const [currentPosts, setcurrentPosts] = useState<any>(postsLoc);
  console.log("currentPosts", currentPosts);

  if(currentPosts?.length == 0){
    postsLoc = post;
    inPage = postsLoc?.length;
    fnPage = postsLoc?.length + maxPost;
    setcurrentPosts(postsLoc);
  }

  // useEffect(() => {
  //     postsLoc = JSON.parse(localStorage.getItem('postsLoc')!);

  //     if(postsLoc != post) {
  //       if(postsLoc) {
  //         console.log("Reload called");
  //         localStorage.setItem('postsLoc', JSON.stringify(post));
  //         postsLoc = JSON.parse(localStorage.getItem('postsLoc')!);
  //         setcurrentPosts(postsLoc);
  //         setLoading(false);
  //       }
  //     }
  // }, []);

  useEffect(() => {
    location = window.location.hostname.split(".")[0];
    url = import.meta.env.VITE_URL;

    const fetchCat = async() => {
      // var posts:any = await supabaseFetch('posts', 'title, created_at, featured_imghd, href, authors!inner(*), category!inner(*)', 'authors.username');
      const {data, error} = await supabaseClient
      .from('category')
      .select('*, authors!inner(*)')
      .eq('authors.username', authorSlug)
      .gt('posts', 0);

      if(error) {
        throw setcatError(error.message);
      }

      if(data) {
        console.log("Inside cat");
        setCategories(data);
        setcatLoading(false);
      }
    }
    location != url ? fetchCat() : null;
  }, []);

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

  const posts = post?.sort((a:any, b:any) => {
    return b.created_at - a.created_at;
  }).slice(0, 4);

  // var initRange:any = parseInt(localStorage.getItem('initpostRange')!);
  // var finRange:any = parseInt(localStorage.getItem('finpostRange')!);
  
  const fetchNxtPost = async () => {

    const {data,error} = await supabaseClient
      .from('posts')
      .select('title, created_at, featured_imghd, href, post, authors!inner(*), category!inner(*)')
      .eq('authors.username', authorSlug)
      .range(inPage, fnPage);

      if(error) {
        setsnackMsg(error.message);
        throw setsnackStatus(true);
      }

      if(data.length > 0) {
        console.log(data);
        postsLoc = [...postsLoc, ...data];
        inPage = postsLoc.length;
        fnPage = postsLoc.length + maxPost;
        
        console.log(inPage);
        console.log(fnPage);
    
        // localStorage.setItem('postsLoc', JSON.stringify(newPosts));
        // localStorage.setItem('initpostRange', iPage);
        // localStorage.setItem('finpostRange', fPage);

        // var npostsLoc:any = JSON.parse(localStorage.getItem('postsLoc')!);
        console.log(postsLoc);
        setcurrentPosts(postsLoc);
        setbtnLoading(false);

      }else {
        setbtnLoading(false);
        setsnackMsg("No Posts to show");
        setsnackStatus(true);

      }

  }

  const fetchNewCat = async (catId:any) => {
    
    const {data,error} = await supabaseClient
      .from('posts')
      .select('title, created_at, featured_imghd, href, post, authors!inner(*), category!inner(*)')
      .eq('authors.username', authorSlug)
      .eq('category', catId)
      .range(icPage, fcPage);

      if(error) {
        throw setError(error.message);
      }

      if(data.length > 0) {
        console.log(data);
        postsLoc = [...postsLoc, ...data];
        icPage = postsLoc.length;
        fcPage = postsLoc.length + maxPost;
        
        console.log(icPage);
        console.log(fcPage);

        setcurrentPosts(postsLoc);
        setLoading(false);

      }else {
        setLoading(false);
        setsnackMsg("No Posts to show");
        setsnackStatus(true);

      }
  }

  const fetchCatPost = async (catId:any) => {
    setLoading(true);
    catVal = catId.id;
    setcategoryListL(catId.name);
    setcategoryList(catId.id);
    if(catVal == "-1") {
      postsLoc = [];
      inPage = postsLoc.length;
      fnPage = postsLoc.length + maxPost;
      fetchNxtPost().then(() => {
        setLoading(false);
      });
    }else {
      postsLoc = [];
      icPage = postsLoc.length;
      fcPage = postsLoc.length + maxPost;
      fetchNewCat(catVal).then(() => {
        setLoading(false);
      });

    }

  }

  const setPosts = (catId:any) => {
    console.log(categoryList);
    setbtnLoading(true);
    if(catId == "-1") {
      fetchNxtPost();
    }else {
      fetchNewCat(catId).then(() => {
        setbtnLoading(false);
      });
    }
  }

  const href = (post: any) => { return location != url ? post.href : author.username+post.href; }

  return (
    <div className="nc-PageHome relative">
      <Helmet>
        <title>{toTitleCase(author[0].username)}</title>
        <link rel="icon" type="image/jpeg" href={author[0].faviconimg} sizes="16x16" />
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======== BG GLASS ======== */}
        {
          currentPosts?.length > 0 && ( 
            <BgGlassmorphism />
          )
        }

        {/* ======= START CONTAINER ============= */}
        <div className="container relative">
          {/* === SECTION  === */}
          <SectionLargeSlider
            className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
            heading={author[0].title}
            desc={author[0].description}
            type={"subDomain"}
            posts={posts}
          />

          {/* === SECTION  === */}
          {/* <div className="relative py-16">
            <BackgroundSection />
            <SubSectionGridAuthorBox
              authors={author}
            />
          </div> */}

          {/* === SECTION 5 === */}
          {/* {
            (catError) ?
            (
                <>
                  <div
                    className={`nc-PageSingleTemp4Sidebar pt-5 lg:pt-5`}
                    data-nc-id="PageSingleTemp4Sidebar"
                  >
                      <div className="container">
                        <header className="text-center max-w-2xl mx-auto space-y-7">
                          <h2 className="text-7xl md:text-8xl"></h2>
                          <span className="text-1xl md:text-1xl font-semibold tracking-widest">
                            There was an error loading categories. Please check your internet connection & try again
                          </span>
                          <span className="block text-1xl text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                          </span>
                        </header>
                      </div>
                  </div>
                </>
            )
            :
            (catLoading == true) ?
            (
              <div
                className={`nc-PageSingleTemp4Sidebar pt-5 lg:pt-5`}
                data-nc-id="PageSingleTemp4Sidebar"
              >
                
                <div className="container">
                  <header className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-7xl md:text-8xl"></h2>
                    <h1 className="text-2xl md:text-2xl font-semibold tracking-widest">
                      LOADING....
                    </h1>
                    <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                    </span>
                  </header>
                </div>
              </div>
            )
            :
            (categories.length != 0) ?
            (
              
              <SubSectionSliderNewCategories
                className="py-16 lg:py-28"
                heading="Top trending categories"
                itemPerRow={5}
                categories={categories}
                categoryCardType="card5"
                uniqueSliderClass="pageHome-section3"
              />
            ) : null
          } */}

          {
            (currentPosts?.length > 0) && (
              
                <div className="mb-20">
                  <div>
                    {
                      categories.length != 0 && <div className={`nc-ArchiveFilterListBox flex flex-col justify-end md:flex-row md:justify-between`}>
                        <Heading className="mx-2 mb-7">
                          Articles
                        </Heading>
                        <div className="flex justify-start">
                          <Listbox value={categoryListL} onChange={(e) => fetchCatPost(e)}>
                            <div className="relative min-w-[150px] md:min-w-[200px]">
                              <Listbox.Button as={"div"}>
                                <ButtonDropdown>{categoryListL}</ButtonDropdown>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute md:right-0 xl:right-0 lg:right-0 w-52 py-1 mt-2 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700 z-50">
                                  <Listbox.Option
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700"
                                          : ""
                                      } cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={{ name: "All", id: "-1"}}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected ? "font-medium" : "font-normal"
                                          } block truncate`}
                                        >
                                          All
                                        </span>
                                        {selected ? (
                                          <span className="text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200">
                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                  {catLoading == false && categories.map((item: any, index: number) => (
                                    <Listbox.Option
                                      key={index}
                                      className={({ active }) =>
                                        `${
                                          active
                                            ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700"
                                            : ""
                                        } cursor-default select-none relative py-2 pl-10 pr-4`
                                      }
                                      value={item}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`${
                                              selected ? "font-medium" : "font-normal"
                                            } block truncate`}
                                          >
                                            {item.name}
                                          </span>
                                          {selected ? (
                                            <span className="text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200">
                                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                    }
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
                      (loading == true) ?
                      (
                        <Loading size={20}/>
                      )
                      :
                      (
                        <>
                        {/* LOOP ITEMS */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-0">
                          {
                            currentPosts.map((post:any, index:any) => (
                              <Card20 key={index} posts={post} postHref={'../'+'../'+href(post)} />
                            ))
                          }
                        </div>
              
                        {/* PAGINATIONS */}
                        {
                          (postsLoc.length > maxPost) && (
                            
                            <div className="flex mt-20 justify-center items-center">
                              <ButtonPrimary loading={btnLoading} onClick={() => setPosts(categoryList)}>Show me more</ButtonPrimary>
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

        </div>

        {/* === SECTION 11 === */}
        {/* <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="relative container">
            <SectionGridPosts
              className="py-16 lg:py-28"
              headingIsCenter
              postCardName="card10V2"
              heading="Explore latest video articles"
              subHeading="Hover on the post card and preview video 🥡"
              posts={DEMO_POSTS_VIDEO.filter((_, i) => i > 5 && i < 12)}
              gridClass="md:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </div> */}

        <div className="container ">

          {/* === SECTION 8 === */}
          <div className="relative">
            <BackgroundSection />
             <SectionSubscribe2 className="pt-16 pb-10 lg:pt-28" />
          </div>

          {/* === SECTION 11 === */}
          {/* <SectionMagazine4
            className="py-16 lg:py-28"
            heading="Life styles 🎨 "
            posts={MAGAZINE2_POSTS}
            tabs={MAGAZINE1_TABS}
          /> */}


          {/* === SECTION 14 === */}
          {/* <div className="relative py-16">
            <BackgroundSection />
            <SectionBecomeAnAuthor />
          </div> */}

          {/* === SECTION 15 === */}
          {/* <SectionVideos className="py-16 lg:py-28" /> */}

          {/* === SECTION 17 === */}
          {/* <SectionLatestPosts
            className="pb-16 lg:pb-28"
            posts={DEMO_POSTS.filter((_, i) => i > 8 && i < 16)}
            widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
            categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
            tags={DEMO_CATEGORIES}
          /> */}
          {/* === SECTION 12 === */}
          
        </div>
        {/* ======= END CONTAINER ============= */}
        <Snackbar
          open={snackStatus}
          autoHideDuration={snackDuration}
          onClose={handleClose}
          action={snackAction}
          message={snackMsg}
        />
      </div>
    </div>
  );
};

export default PageHome;
