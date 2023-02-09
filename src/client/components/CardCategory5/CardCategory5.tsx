import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TaxonomyType, TwMainColor } from "data/types";
import { Link } from "react-router-dom";
import Badge from "components/Badge/Badge";

export interface CardCategory5Props {
  className?: string;
  taxonomy: any;
}

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  taxonomy,
}) => {
  const { posts, name, href = "/", featured_imgsd, color } = taxonomy;

  return (
    <Link
      to={href}
      className={`nc-CardCategory5 relative block group ${className}`}
      data-nc-id="CardCategory5"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-7 sm:aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden group`}
      >
        <NcImage
          src={featured_imgsd}
          className="object-cover w-full h-full rounded-2xl"
        />
        <span className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></span>
      </div>
      <Badge
        className="absolute top-3 right-3"
        color={color as TwMainColor}
        name={
          <div>
            {posts}
            <i className="ml-3 las la-arrow-right"></i>
          </div>
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className={`text-base font-medium px-4 py-2 sm:px-6 sm:py-3 bg-white text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60`}
        >
          <span className="line-clamp-1"> {name}</span>
        </h2>
      </div>
    </Link>
  );
};

export default CardCategory5;
