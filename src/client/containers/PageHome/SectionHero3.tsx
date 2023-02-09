import React, { FC } from "react";
import { PostDataType } from "data/types";
import NcImage from "components/NcImage/NcImage";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Card5 from "components/Card5/Card5";

export interface SectionHero3Props {
  posts: PostDataType[];
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ posts, className = "" }) => {
  const renderMain = () => {
    const { featuredImage, title, desc, href } = posts[0];
    return (
      <div className="aspect-h-8 aspect-w-8 sm:aspect-w-10 lg:aspect-w-16 ">
        <NcImage
          containerClassName="absolute inset-0 rounded-[40px] overflow-hidden"
          src={featuredImage}
        />
        <span className="absolute inset-0 rounded-[40px] bg-black bg-opacity-50"></span>
        <div className="absolute inset-0 p-5 md:p-14 xl:p-20 2xl:p-28">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white">
              <span className="line-clamp-2">{title}</span>
            </h2>
            <span className="block text-sm sm:text-base text-neutral-300 mt-3 sm:mt-5">
              <span className="line-clamp-2">{desc}</span>
            </span>
            <ButtonSecondary className="mt-5 sm:mt-8" href={href}>
              <span> Read more</span>
              <i className="ml-3 text-xl las la-arrow-right"></i>
            </ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  const renderSubPosts = () => {
    const subPosts = posts.filter((_, i) => i >= 1 && i < 4);
    return (
      <div className="lg:px-14 xl:px-20 2xl:px-28 grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 transform mt-6 md:-mt-20">
        {subPosts.map((post) => (
          <Card5
            className="bg-white dark:bg-neutral-800 shadow-2xl rounded-3xl"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`nc-SectionHero3 ${className}`}>
      {!posts.length && <span>Nothing we found!</span>}
      {posts.length && renderMain()}
      {posts.length > 1 && renderSubPosts()}
    </div>
  );
};

export default SectionHero3;
