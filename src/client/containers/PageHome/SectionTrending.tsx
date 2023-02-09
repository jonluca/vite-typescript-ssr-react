import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import { PostDataType } from "data/types";
import Card5 from "components/Card5/Card5";

export interface SectionTrendingProps {
  posts: PostDataType[];
  heading?: string;
  className?: string;
}

const SectionTrending: FC<SectionTrendingProps> = ({
  posts,
  heading = "Trending on Ncmaz",
  className = "",
}) => {
  return (
    <div className={`nc-SectionTrending relative ${className}`}>
      {!!heading && <Heading>{heading}</Heading>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {posts.map((post) => {
          return <Card5 key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default SectionTrending;
