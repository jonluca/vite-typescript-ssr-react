import CardLarge1 from "components/CardLarge1/CardLarge1";
import SubCardLarge1 from "components/CardLarge1/SubCardLarge1";
import TitleHeading from "components/Heading/TitleHeading";
import { PostDataType } from "data/types";
import React, { FC, useState } from "react";
import Card2 from "components/Card2/Card2";

export interface SectionLargeSliderProps {
  className?: string;
  heading?: string;
  desc?: string;
  posts: PostDataType[];
  type?: any,
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  posts,
  heading = "Editor's pick",
  desc = "Discover the most outstanding articles in all topics of life. ",
  type = "default",
  className = "",
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const authorPosts:any = posts;

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= posts.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return posts.length - 1;
      }
      return state - 1;
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div className="text-center">
        {!!heading && <TitleHeading desc={desc}>{heading}</TitleHeading>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-0">
        {authorPosts != undefined && posts.map((item, index) => {
          return type === "default" ? (
            <CardLarge1
              key={index}
              onClickNext={handleClickNext}
              onClickPrev={handleClickPrev}
              post={item}
            />
          ) : (
            // <Card20 key={index} posts={item} postHref={'../'+'../'+href(item)} />
            <Card2 key={index} size="large" posts={item} />
            // <SubCardLarge1
            //   key={index}
            //   postLength={posts.length}
            //   onClickNext={handleClickNext}
            //   onClickPrev={handleClickPrev}
            //   post={item}
            // />
          );
        })}
      </div>
    </div>
  );
};

export default SectionLargeSlider;
