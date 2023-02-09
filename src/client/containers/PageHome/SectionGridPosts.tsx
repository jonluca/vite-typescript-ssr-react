import React, { FC, ReactNode } from "react";
import Card3 from "components/Card3/Card3";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card11 from "components/Card11/Card11";
import Card14 from "components/Card14/Card14";
import Card10V2 from "components/Card10/Card10V2";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";

// OTHER DEMO WILL PASS PROPS
const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 17);

//
export interface SectionGridPostsProps {
  posts?: PostDataType[];
  className?: string;
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  postCardName?:
    | "card3"
    | "card4"
    | "card7"
    | "card9"
    | "card10"
    | "card10V2"
    | "card11"
    | "card14"
    | "card15Podcast";
}

const SectionGridPosts: FC<SectionGridPostsProps> = ({
  posts = postsDemo,
  postCardName = "card3",
  className = "",
  gridClass = "",
  heading,
  subHeading,
  headingIsCenter,
}) => {
  const renderCard = (post: PostDataType) => {
    switch (postCardName) {
      case "card3":
        return (
          <Card3
            key={post.id}
            className="p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"
            post={post}
          />
        );
      case "card4":
        return <Card4 key={post.id} post={post} />;
      case "card7":
        return (
          <Card7 key={post.id} post={post} ratio="aspect-w-5 aspect-h-5" />
        );
      case "card9":
        return <Card9 key={post.id} post={post} />;
      case "card10":
        return <Card10 key={post.id} post={post} />;
      case "card10V2":
        return <Card10V2 key={post.id} post={post} />;
      case "card11":
        return <Card11 key={post.id} post={post} />;
      case "card14":
        return <Card14 key={post.id} post={post} />;
      case "card15Podcast":
        return <Card15Podcast key={post.id} post={post} />;
      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionGridPosts relative ${className}`}>
      <Heading desc={subHeading} isCenter={headingIsCenter}>
        {heading}
      </Heading>
      <div className={`grid gap-6 md:gap-8 ${gridClass}`}>
        {posts.map((post) => renderCard(post))}
      </div>
      <div className="flex mt-20 justify-center items-center">
        <ButtonPrimary>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridPosts;
