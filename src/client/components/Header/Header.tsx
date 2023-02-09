import React, { FC, useEffect, useRef, useState } from "react";
import SocialsShare from "components/SocialsShare/SocialsShare";
import Avatar from "components/Avatar/Avatar";
import BookmarkContainer from "containers/BookmarkContainer/BookmarkContainer";
import PostCardLikeContainer from "containers/PostCardLikeContainer/PostCardLikeContainer";
import MainNav2Logged from "./MainNav2Logged";
import MainNav2 from "./MainNav2";
import MainNav1 from "./MainNav1";
import SubMainNav1 from "./SubMainNav1";
import { useLocation, useParams } from "react-router-dom";
import { SINGLE } from "data/single";
import { useGlobalContext } from "utils/context";

export interface HeaderProps {
  mainNavStyle?: "style1" | "style2" | "style2Logedin";
  isTopOfPage?: boolean;
}

let MAIN_MENU_HEIGHT = 0;
let WIN_PREV_POSITION = 0;

const Header: FC<HeaderProps> = ({ mainNavStyle = "style1", isTopOfPage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const urlLocation = window.location.hostname.split(".")[0];
  const url = import.meta.env.VITE_URL;

  const { currentPost, setcurrentPost } = useGlobalContext();

  const { postslug } = useParams<any>();
  //
  //
  const location = useLocation();

  const showSingleMenu = location.pathname.search(/^\/posts/g) > -1;
  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);

  useEffect(() => {
    if (!mainMenuRef.current) {
      return;
    }
    MAIN_MENU_HEIGHT = mainMenuRef.current.offsetHeight;
    window.addEventListener("scroll", handleShowHideHeaderMenuEvent);
    return () => {
      window.removeEventListener("scroll", handleShowHideHeaderMenuEvent);
    };
  }, []);

  useEffect(() => {
    if (showSingleMenu) {
      //  BECAUSE DIV HAVE TRANSITION 100ms
      setTimeout(() => {
        window.addEventListener("scroll", handleShowHideSingleHeadeEvent);
      }, 200);
    } else {
      window.removeEventListener("scroll", handleShowHideSingleHeadeEvent);
    }
    return () => {
      window.removeEventListener("scroll", handleShowHideSingleHeadeEvent);
    };
  }, [showSingleMenu]);

  const handleShowHideSingleHeadeEvent = () => {
    (typeof window !== "undefined") && window.requestAnimationFrame(showHideSingleHeade);
  };
  const handleShowHideHeaderMenuEvent = () => {
    (typeof window !== "undefined") && window.requestAnimationFrame(showHideHeaderMenu);
  };

  const handleProgressIndicator = () => {
    
    if (typeof window !== "undefined") {
      const entryContent = document.querySelector(
        "#single-entry-content"
      ) as HTMLDivElement | null;
  
      if (!showSingleMenu || !entryContent) {
        return;
      }
      
      const totalEntryH =
      entryContent.offsetTop + entryContent.offsetHeight - 500;
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let scrolled = (winScroll / totalEntryH) * 100;
      if (!progressBarRef.current || scrolled > 140) {
        return;
      }

      scrolled = scrolled >= 100 ? 100 : scrolled;

      progressBarRef.current.style.width = scrolled + "%";
    }
  };

  const showHideSingleHeade = () => {
    // SHOW _ HIDE SINGLE DESC MENU
    if (typeof window !== "undefined") {
      handleProgressIndicator();
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      if (winScroll > 600) {
        setIsSingleHeaderShowing(true);
      } else {
        setIsSingleHeaderShowing(false);
      }
    }
  };

  const showHideHeaderMenu = () => {
    if (typeof window !== "undefined") {
      let currentScrollPos = window.pageYOffset;
      if (!containerRef.current || !mainMenuRef.current) return;
  
      if (Math.abs(WIN_PREV_POSITION - currentScrollPos) <= 50) {
        return;
      }
  
      // SHOW _ HIDE MAIN MENU
      if (WIN_PREV_POSITION > currentScrollPos) {
        containerRef.current.style.top = "0";
      } else {
        containerRef.current.style.top = `-${MAIN_MENU_HEIGHT + 2}px`;
      }
  
      WIN_PREV_POSITION = currentScrollPos;
    }
  };

  const getTitle = () => {
    const titleR = location.pathname
      .split("/")[2]
      .replace(/-/g, " ")
      .toUpperCase();
    console.log(currentPost);
    return "ABout";
  };

  const renderSingleHeader = () => {
    if (!isSingleHeaderShowing) return null;
    const { title, authors } = currentPost[0];
    return (
      <div className="nc-SingleHeaderMenu dark relative py-4 bg-neutral-900 dark:bg-neutral-900">
        <div className="container">
          <div className="flex">
            <div className="flex items-center mr-3">
              <Avatar
                imgUrl={authors.avatar_url}
                userName={authors.full_name}
                sizeClass="w-8 h-8 text-lg"
                radius="rounded-full"
              />
              <h3 className="ml-4 text-lg line-clamp-1 text-neutral-100">
                {title}
              </h3>
            </div>

            {/* ACTION */}
            <div className="flex items-center space-x-2 text-neutral-800 sm:space-x-3 dark:text-neutral-100">
              {/* <PostCardLikeContainer postId={SINGLE.id} like={SINGLE.like} />
              <BookmarkContainer
                initBookmarked={bookmark.isBookmarked}
                postId={id}
              />
              <div className="border-l border-neutral-300 dark:border-neutral-700 h-6"></div>
              <SocialsShare
                className="flex space-x-2"
                itemClass="w-8 h-8 bg-neutral-100 text-lg dark:bg-neutral-800 dark:text-neutral-300"
              /> */}
            </div>
          </div>
        </div>
        <div className="absolute top-full left-0 w-full progress-container h-[5px] bg-neutral-300 overflow-hidden">
          <div
            ref={progressBarRef}
            className="progress-bar h-[5px] w-0 bg-teal-600"
          />
        </div>
      </div>
    );
  };

  const renderMainNav = () => {
    switch (mainNavStyle) {
      case "style1":
        return urlLocation != url ? <SubMainNav1 /> : <MainNav1 />;
      case "style2":
        return <MainNav2 />;
      case "style2Logedin":
        return <MainNav2Logged />;

      default:
        return urlLocation != url ? <SubMainNav1 /> : <MainNav1 />;
    }
  };

  return (
    <div
      className="nc-Header sticky top-0 w-full left-0 right-0 z-40 transition-all "
      ref={containerRef}
    >
      {/* RENDER MAIN NAVIGATION */}
      <div
        className={`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-b dark:border-neutral-700 ${
          isTopOfPage ? "!border-transparent" : ""
        }`}
        ref={mainMenuRef}
      >
        {renderMainNav()}
      </div>

      {/* RENDER PROGESSBAR FOR SINGLE PAGE */}
      {showSingleMenu && renderSingleHeader()}
    </div>
  );
};

export default Header;

