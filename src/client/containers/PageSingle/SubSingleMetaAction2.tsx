import React, { FC, useEffect, useState } from "react";
import PostActionDropdown from "components/PostActionDropdown/PostActionDropdown";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import { SOCIALS_DATA } from "components/SocialsShare/SocialsShare";
import BookmarkContainer from "containers/BookmarkContainer/BookmarkContainer";
import { PostDataType } from "data/types";
import NcDropDown from "components/NcDropDown/NcDropDown";
import twFocusClass from "utils/twFocusClass";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { XIcon } from "@heroicons/react/solid";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

export interface SingleMetaAction2Props {
  className?: string;
  meta: any;
}

const SubSingleMetaAction2: FC<SingleMetaAction2Props> = ({
  className = "",
  meta,
}) => {
  const { id, bookmark, title, href } = meta;

  var shareUrl:any;

  useEffect(() => {
    shareUrl = window.location.origin + href;
    console.log("meta", shareUrl);

  }, [])

  const [snackMsg, setsnackMsg] = useState<any>("");
  const [snackDuration, setsnackDuration] = useState<any>();
  const [snackStatus, setsnackStatus] = useState<any>(false);

  const copyLink = (e:any) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl);
    setsnackMsg('Link Copied');
    setsnackStatus(true);
    setTimeout(() => {
      setsnackStatus(false);
    }, 1000);
  }

  return (
    <div className={`nc-SingleMetaAction2 ${className}`}>
      <div className="flex flex-row space-x-2.5 items-center">
        {/* <PostCardLikeAndComment
          itemClass="px-4 h-9 text-sm"
          hiddenCommentOnMobile
          postData={meta}
          className="!space-x-2.5"
        /> */}
        {/* <div className="px-1">
          <div className="border-l border-neutral-200 dark:border-neutral-700 h-6" />
        </div> */}

        {/* <BookmarkContainer
          initBookmarked={bookmark.isBookmarked}
          postId={String(id)}
          containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
          iconClass="h-5 w-5"
        /> */}
        {/* <NcDropDown
          className="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
          renderTrigger={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          )}
          onClick={() => {}}
          data={SOCIALS_DATA}
        /> */}
        <FacebookShareButton 
            url={shareUrl}
            quote={title}
            className=""
        >
          <div className=" flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
            <i className={`${`lab la-facebook-f`}`} ></i>
          </div>
        </FacebookShareButton>
        <LinkedinShareButton
            title={title}
            url={shareUrl}
            className="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
        >
            <div className=" flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
              <i className={`${`lab la-linkedin-in`}`} ></i>
            </div>
        </LinkedinShareButton>
        <TwitterShareButton
            title={title}
            url={shareUrl}
        >
            <div className=" flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
              <i className={`${`lab la-twitter`}`} ></i>
            </div>
        </TwitterShareButton>
        <WhatsappShareButton
            title={title}
            url={shareUrl}
        >
            <div className=" flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
              <i className={`${`lab la-whatsapp`}`} ></i>
            </div>
        </WhatsappShareButton>
        <button
            className={` flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full`}
            data-nc-id="NcBookmark"
            title="Save to reading list"
            onClick={copyLink}
        >
            
            <i className={`${`las la-copy`} text-base`}></i>
        </button>
        {/* <PostActionDropdown
          containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          iconClass="h-5 w-5"
          postData={meta}
        /> */}
        <Snackbar
          open={snackStatus}
          autoHideDuration={snackDuration}
          message={snackMsg}
        />
      </div>
    </div>
  );
};

export default SubSingleMetaAction2;
