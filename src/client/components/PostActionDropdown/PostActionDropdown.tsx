import React, { FC, useState } from "react";
import twFocusClass from "utils/twFocusClass";
import NcDropDown from "components/NcDropDown/NcDropDown";
import ModalReportItem from "components/ModalReportItem/ModalReportItem";
import { PostDataType } from "data/types";
import ModalHideAuthor from "./ModalHideAuthor";
import { useNavigate } from "react-router";

export interface PostActionDropdownProps {
  containerClassName?: string;
  iconClass?: string;
  postData: PostDataType;
  dropdownPositon?: "up" | "down";
}

const PostActionDropdown: FC<PostActionDropdownProps> = ({
  containerClassName = "h-8 w-8 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",
  iconClass = "h-[18px] w-[18px]",
  dropdownPositon = "down",
  postData,
}) => {
  let actions = [
    {
      id: "copylink",
      name: "Copy link",
      icon: "las la-copy",
    },
    // {
    //   id: "commentThisArticle",
    //   name: "Comment this article",
    //   icon: "las la-comment-dots",
    // },
    // {
    //   id: "hideThisAuthor",
    //   name: "Hide this author",
    //   icon: "las la-user-slash",
    // },
    {
      id: "reportThisArticle",
      name: "Report this article",
      icon: "las la-flag",
    },
  ];
  //
  let history = useNavigate();
  //
  const [isReporting, setIsReporting] = useState(false);
  const [showModalHideAuthor, setShowModalHideAuthor] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openModalReportPost = () => setIsReporting(true);
  const closeModalReportPost = () => setIsReporting(false);

  const openModalHideAuthor = () => setShowModalHideAuthor(true);
  const onCloseModalHideAuthor = () => setShowModalHideAuthor(false);

  const hanldeClickDropDown = (item: typeof actions[number]) => {
    if (typeof window !== "undefined") {
      if (item.id === "copylink") {
        navigator.clipboard.writeText(window.location.origin + postData.href);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
        return;
      }
      if (item.id === "reportThisArticle") {
        return openModalReportPost();
      }
      if (item.id === "hideThisAuthor") {
        return openModalHideAuthor();
      }
      if (item.id === "commentThisArticle") {
        return history(postData.href + "#comment");
      }
  
      return;
    }
  };

  const renderMenu = () => {
    if (isCopied) {
      actions = actions.map((item) => {
        if (item.id !== "copylink") return item;
        return {
          ...item,
          name: "Link Copied",
        };
      });
    }
    return (
      <NcDropDown
        className={`text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full  ${containerClassName} ${twFocusClass()}`}
        iconClass={iconClass}
        data={actions}
        panelMenusClass={
          dropdownPositon === "up" ? "origin-bottom-right bottom-0" : undefined
        }
        onClick={hanldeClickDropDown}
      />
    );
  };

  return (
    <div>
      {renderMenu()}

      <ModalReportItem
        show={isReporting}
        id={postData.title}
        author={postData.authors.id}
        onCloseModalReportItem={closeModalReportPost}
      />
      {/* <ModalHideAuthor
        show={showModalHideAuthor}
        auhthor={postData.author}
        onCloseModalHideAuthor={onCloseModalHideAuthor}
      /> */}
    </div>
  );
};

export default PostActionDropdown;
