import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TaxonomyType, TwMainColor } from "data/types";
import { Link } from "react-router-dom";
import Badge from "components/Badge/Badge";

export interface CardCategory4Props {
  className?: string;
  taxonomy: any;
  index?: string;
}

const SubCardCategory4: FC<CardCategory4Props> = ({
  className = "",
  taxonomy,
  index,
}) => {
  const { posts, name, href = "/", featured_imgsd } = taxonomy;

  const colors = ["bg-pink-500", "bg-red-500", "bg-gray-500", "bg-purple-500", "bg-green-500", "bg-indigo-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <Link
      to={href}
      className={`nc-CardCategory4 flex flex-col ${className}`}
      data-nc-id="CardCategory4"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden group`}
      >
        <NcImage
          src={featured_imgsd}
          className="object-cover w-full h-full rounded-2xl"
        />
        {/* <div>
          {index && (
            <Badge
              color={color as TwMainColor}
              name={index}
              className="absolute top-3 left-3"
            />
          )}
        </div> */}
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>

      <div className="flex items-center mt-5">
        <div className={`w-10 h-10 ${colors[Math.floor(Math.random() * colors.length)]} rounded-full`}></div>
        <div className="ml-3 truncate">
          <h2
            className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
          >
            {name}
          </h2>
          <span
            className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
          >
            {posts} Articles
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SubCardCategory4;
