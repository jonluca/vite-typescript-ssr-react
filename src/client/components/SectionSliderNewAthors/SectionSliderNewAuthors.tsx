import React, { FC, useEffect, useMemo } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { PostDataType } from "data/types";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import NextPrev from "components/NextPrev/NextPrev";
import ncNanoId from "utils/ncNanoId";

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authors: PostDataType["author"][];
  uniqueSliderClass: string;
}

const SectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
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
    perView: 5,

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
    <div className={`nc-SectionSliderNewAuthors ${className}`}>
      <div className={`${UNIQUE_CLASS}`}>
        <Heading isCenter desc={subHeading}>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {authors.map((item, index) => (
              <li key={index} className="glide__slide pb-12 md:pb-16">
                <CardAuthorBox2 author={item} />
              </li>
            ))}
          </ul>
        </div>
        <NextPrev
          btnClassName="w-12 h-12"
          containerClassName="justify-center"
        />
      </div>
    </div>
  );
};

export default SectionSliderNewAuthors;
