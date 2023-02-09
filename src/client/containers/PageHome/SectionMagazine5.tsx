import React, { FC, useState } from "react";
import { PostDataType } from "data/types";
import HeaderFilter from "./HeaderFilter";
import Card12 from "components/Card12/Card12";
import Card13 from "components/Card13/Card13";

export interface SectionMagazine5Props {
  tabs: string[];
  posts: PostDataType[];
  heading?: string;
}

const SectionMagazine5: FC<SectionMagazine5Props> = ({
  posts,
  tabs,
  heading = "Latest Articles 🎈 ",
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className="nc-SectionMagazine5">
      <HeaderFilter
        tabActive={tabActive}
        tabs={tabs}
        heading={heading}
        onClickTab={handleClickTab}
      />
      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
        {posts[0] && <Card12 post={posts[0]} />}
        <div className="grid grid-cols-1 gap-5 md:gap-7">
          {posts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card13 key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
