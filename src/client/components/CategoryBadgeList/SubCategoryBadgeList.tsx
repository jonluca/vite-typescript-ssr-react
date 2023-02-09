import { PostDataType } from "data/types";
import React, { FC } from "react";
import Badge from "components/Badge/Badge";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: any;
}

const SubCategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  categories,
}) => {
    
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
        <Badge
          className={itemClass}
          name={categories.name}
          href={categories.href}
          color={'red'}
        />
    </div>
  );
};

export default SubCategoryBadgeList;
