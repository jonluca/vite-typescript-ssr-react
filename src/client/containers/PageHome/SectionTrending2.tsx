import React, { FC } from "react";
import Card1 from "components/Card1/Card1";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";

const postsDemo: PostDataType[] = DEMO_POSTS.filter(
  (_, i) => i > DEMO_POSTS.length - 10
);

export interface SectionTrending2Props {
  posts?: PostDataType[];
}

const SectionTrending2: FC<SectionTrending2Props> = ({ posts = postsDemo }) => {
  return (
    <div className="nc-SectionTrending2">
      <div className="container py-10 lg:py-14 flow-root">
        <Heading>🎯 Trending on N.C blog</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 -m-4">
          {posts.map((post) => {
            return <Card1 key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionTrending2;
