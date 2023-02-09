import { CustomLink } from "data/types";
import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import twFocusClass from "utils/twFocusClass";

const DEMO_PAGINATION: CustomLink[] = [
  {
    label: '1',
    href: "#",
  },
  {
    label: '2',
    href: "#",
  },
  {
    label: '3',
    href: "#",
  },
  {
    label: '4',
    href: "#",
  },
];

export interface PaginationProps {
  className?: string;
  totalPosts: number;
  postsperPage: number;
  currentPage: number;
  setcurrentPage: (page: number) => void;
}

const PostPagination: FC<PaginationProps> = ({ 
  className = "",
  totalPosts,
  postsperPage,
  currentPage,
  setcurrentPage,
}) => {
  
  var pages:any = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsperPage); i++) {
    console.log(totalPosts);
    pages.push(i);
  }

  const renderItem = (page:number, index: number) => {
    // if ((index+1) === currentPage) {
    //   // RETURN ACTIVE PAGINATION
    //   return (
    //     <span
    //       key={index}
    //       className={}
    //     >
    //       {page}
    //     </span>
    //   );
    // }
    // RETURN UNACTIVE PAGINATION
    return (
      <span
        key={index}
        className={page == currentPage ? `inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white cursor-default ${twFocusClass()}` : `inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700  cursor-default ${twFocusClass()}`}
        onClick={() => setcurrentPage(page)}
      >
        {page}
      </span>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {pages.length == 1 ? null : pages.map(renderItem)}
    </nav>
  );
};

export default PostPagination;
