import React, { FC, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Glide from "@glidejs/glide";
import { PostDataType } from "data/types";
import Card9 from "components/Card9/Card9";
import NextPrev from "components/NextPrev/NextPrev";
import Card10 from "components/Card10/Card10";
import Card11 from "components/Card11/Card11";
import Card10V2 from "components/Card10/Card10V2";
import ncNanoId from "utils/ncNanoId";

export interface SectionSliderPostsProps {
  className?: string;
  heading: string;
  subHeading?: string;
  posts: PostDataType[];
  postCardName?: "card4" | "card7" | "card9" | "card10" | "card10V2" | "card11";
  sliderStype?: "style1" | "style2";
  perView?: 2 | 3 | 4;
  uniqueSliderClass: string;
}

const SectionSliderPosts: FC<SectionSliderPostsProps> = ({
  heading,
  subHeading,
  className = "",
  posts,
  postCardName = "card4",
  sliderStype = "style1",
  perView = 4,
  uniqueSliderClass,
}) => {
  const UNIQUE_CLASS = "SectionSliderPosts_" + ncNanoId(uniqueSliderClass);

  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    perView: perView,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: perView - 1,
      },
      1023: {
        perView: perView - 2 || 1.2,
        gap: 20,
      },
      767: {
        perView: perView - 2 || 1.2,
        gap: 20,
      },
      639: {
        perView: 1.2,
        gap: 20,
      },
    },
  });

  useEffect(() => {
    if (!MY_GLIDE) return;
    MY_GLIDE.mount();
  }, [MY_GLIDE]);

  const getPostComponent = () => {
    switch (postCardName) {
      case "card4":
        return Card4;
      case "card7":
        return Card7;
      case "card9":
        return Card9;
      case "card10":
        return Card10;
      case "card10V2":
        return Card10V2;
      case "card11":
        return Card11;

      default:
        return Card4;
    }
  };

  const renderHeading = () => {
    if (sliderStype === "style1") {
      return (
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
      );
    } else {
      return (
        <Heading desc={subHeading} isCenter>
          {heading}
        </Heading>
      );
    }
  };

  const CardName = getPostComponent();
  return (
    <div className={`nc-SectionSliderPosts ${className}`}>
      <div className={`${UNIQUE_CLASS}`}>
        {renderHeading()}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {posts.map((item, index) => (
              <li
                key={index}
                className={`glide__slide h-auto  ${
                  sliderStype === "style2" ? "pb-12 xl:pb-16" : ""
                }`}
              >
                <CardName posts={item} post={item} />
              </li>
            ))}
          </ul>
        </div>
        {sliderStype === "style2" && (
          <NextPrev
            btnClassName="w-12 h-12"
            containerClassName="justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default SectionSliderPosts;
