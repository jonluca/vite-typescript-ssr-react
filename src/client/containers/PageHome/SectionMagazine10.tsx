import React, { FC, useState } from "react";
import { SectionMagazine1Props } from "./SectionMagazine1";
import HeaderFilter from "./HeaderFilter";
import Card19 from "components/Card19/Card19";
import Card18 from "components/Card18/Card18";

export interface SectionMagazine10Props extends SectionMagazine1Props {}

const SectionMagazine10: FC<SectionMagazine10Props> = ({
  posts,
  tabs,
  className = "",
  heading = "Latest Articles 🎈 ",
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  // When handeClicktab please get posts from api,... and pass to new state (newPosts) and pass to
  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine10 ${className}`}>
      {heading && (
        <HeaderFilter
          tabActive={tabActive}
          tabs={tabs}
          heading={heading}
          onClickTab={handleClickTab}
        />
      )}
      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 gap-5">
          {posts
            .filter((_, i) => i < 3 && i >= 1)
            .map((item, index) => (
              <Card18
                showCategories={false}
                className="sm:row-span-3 col-span-1"
                key={index}
                post={item}
              />
            ))}

          {posts[3] && (
            <Card19
              ratio="aspect-w-4 aspect-h-3 sm:aspect-h-1 sm:aspect-w-16 "
              className="sm:col-span-2 sm:row-span-2"
              titleClass="text-xl sm:text-2xl xl:text-2xl"
              post={posts[3]}
              showCategories={false}
            />
          )}
        </div>

        {posts[0] && <Card19 className="" post={posts[0]} />}
      </div>
    </div>
  );
};

export default SectionMagazine10;
