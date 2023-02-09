import React, { FC, useState } from "react";
import { PostDataType } from "data/types";
import HeaderFilter from "./HeaderFilter";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import { Link } from "react-router-dom";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";

export interface SectionMagazine6Props {
  tabs: string[];
  posts: PostDataType[];
  heading?: string;
  className?: string;
}

const SectionMagazine6: FC<SectionMagazine6Props> = ({
  posts,
  tabs,
  heading = "Latest Articles 🎈 ",
  className = "",
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  const renderMain = () => {
    const { featuredImage, author, title, date, desc, href, readingTime } =
      posts[0];
    const subPosts = posts.filter((_, i) => i > 0);
    return (
      <main className="relative">
        {/* Image */}
        <div className="aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden">
          <NcImage containerClassName="absolute inset-0" src={featuredImage} />
          <div>
            <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"></span>
          </div>

          {/* CONTENT */}
          <div className="group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14">
            <div className="">
              <h2 className="nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
                <Link to={href} className="line-clamp-2">
                  {title}
                </Link>
              </h2>
              <span className="hidden lg:block text-base text-neutral-200 mt-5">
                <span className="line-clamp-2">{desc}</span>
              </span>
            </div>

            <div className="mt-7">
              <CardAuthor2
                readingTime={readingTime}
                date={date}
                author={author}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden">
          <div className="flow-root h-full w-full overflow-y-auto hiddenScrollbar">
            <div className="-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700">
              {subPosts.map((post) => (
                <div key={post.id} className="block py-5 lg:py-7">
                  <h2 className="nc-card-title text-base font-semibold">
                    <Link to={post.href} className="line-clamp-2">
                      {post.title}
                    </Link>
                  </h2>
                  <PostCardMeta className="mt-4" meta={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className={`nc-SectionMagazine6 ${className}`}>
      <HeaderFilter
        tabActive={tabActive}
        tabs={tabs}
        heading={heading}
        onClickTab={handleClickTab}
      />
      {!posts.length && <span>Nothing we found!</span>}
      {posts[0] && renderMain()}
    </div>
  );
};

export default SectionMagazine6;
