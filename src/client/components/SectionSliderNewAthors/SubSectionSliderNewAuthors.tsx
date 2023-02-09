import React, { FC, useEffect, useMemo } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { PostDataType } from "data/types";
import SubCardAuthorBox from "components/CardAuthorBox/SubCardAuthorBox";
import NextPrev from "components/NextPrev/NextPrev";
import ncNanoId from "utils/ncNanoId";

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authors: any;
  uniqueSliderClass: string;
}

const SubSectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
  heading,
  subHeading,
  className = "",
  authors,
  uniqueSliderClass,
}) => {
  const UNIQUE_CLASS = "sliderNewAuthors_" + ncNanoId(uniqueSliderClass);

  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    perView: 1,

    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: 4,
      },
      1023: {
        gap: 24,
        perView: 3,
      },
      767: {
        gap: 20,
        perView: 2.3,
      },
      639: {
        gap: 20,
        perView: 2,
      },
      500: {
        gap: 20,
        perView: 1.3,
      },
    },
  });

  useEffect(() => {
    MY_GLIDE.mount();
  }, [MY_GLIDE, authors, UNIQUE_CLASS]);

  return (
    <div className={`text-center w-full max-w-2xl mx-auto justify-center items-center" ${className}`}>
      <div className={`${UNIQUE_CLASS}`}>
        <Heading isCenter desc={subHeading}>
          {heading}
        </Heading>
        <div className="text-center w-full max-w-2xl mx-auto justify-center items-center" data-glide-el="track">
          <ul className="text-center w-full max-w-2xl mx-auto justify-center items-center">
            {authors.map((item:any, index:any) => (
              <li key={index} className="nc-CardAuthorBox flex flex-col items-center justify-center">
                <SubCardAuthorBox author={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubSectionSliderNewAuthors;
