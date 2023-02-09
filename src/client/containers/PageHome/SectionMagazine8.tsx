import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card17Podcast from "components/Card17Podcast/Card17Podcast";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS_AUDIO } from "data/posts";
import { PostDataType } from "data/types";
import React, { FC } from "react";

const postsDemo: PostDataType[] = DEMO_POSTS_AUDIO.filter(
  (_, i) => i > 7 && i < 17
);

export interface SectionMagazine8Props {
  posts?: PostDataType[];
  className?: string;
}

const SectionMagazine8: FC<SectionMagazine8Props> = ({
  posts = postsDemo,
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine8 relative ${className}`}>
      <Heading
        desc={"Click on music icon and enjoy music or podcast"}
        className="mb-14 text-neutral-900 dark:text-neutral-50"
      >
        Listen to podcasts live
      </Heading>
      <div className={`grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8`}>
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={posts[0]}
        />
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={posts[1]}
        />
        <div className="flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2">
          {posts
            .filter((_, i) => i > 1 && i < 6)
            .map((p) => (
              <Card17Podcast key={p.id} post={p} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine8;
