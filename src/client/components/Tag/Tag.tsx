import { TaxonomyType } from "data/types";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface TagProps {
  className?: string;
  tag: TaxonomyType;
  hideCount?: boolean;
}

const Tag: FC<TagProps> = ({ className = "", tag, hideCount = false }) => {
  return (
    <Link
      className={`nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 ${className}`}
      data-nc-id="Tag"
      to={tag.href}
    >
      {`${tag.name}`}
      {!hideCount && (
        <span className="text-xs font-normal"> ({tag.count})</span>
      )}
    </Link>
  );
};

export default Tag;
