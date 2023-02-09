import React, { FC, useState } from "react";
import Card2 from "components/Card2/Card2";
import { SectionMagazine1Props } from "./SectionMagazine1";
import HeaderFilter from "./HeaderFilter";
import Card11 from "components/Card11/Card11";

export interface SectionMagazine2Props extends SectionMagazine1Props {}

const SectionMagazine2: FC<SectionMagazine2Props> = ({
  posts,
  tabs,
  heading = "🎈 Latest Articles",
  className,
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine2 ${className}`}>
      <HeaderFilter
        tabActive={tabActive}
        tabs={tabs}
        heading={heading}
        onClickTab={handleClickTab}
      />

      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="grid gap-6">
          {posts
            .filter((_, i) => i < 3 && i > 0)
            .map((item, index) => {
              return (
                <Card11 ratio="aspect-w-5 aspect-h-3" key={index} post={item} />
              );
            })}
        </div>
        <div className="lg:col-span-2">
          {posts[0] && <Card2 size="large" post={posts[0]} />}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
          {posts
            .filter((_, i) => i < 5 && i >= 3)
            .map((item, index) => {
              return (
                <Card11 ratio="aspect-w-5 aspect-h-3" key={index} post={item} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine2;
