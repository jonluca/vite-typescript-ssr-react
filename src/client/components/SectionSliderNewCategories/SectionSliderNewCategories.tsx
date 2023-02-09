import React, { FC, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { PostDataType, TaxonomyType } from "data/types";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory1 from "components/CardCategory1/CardCategory1";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import ncNanoId from "utils/ncNanoId";

import NextPrev from "components/NextPrev/NextPrev";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading: string;
  subHeading: string;
  categories: PostDataType["categories"];
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
  uniqueSliderClass: string;
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading,
  subHeading,
  className = "",
  itemClassName = "",
  categories,
  itemPerRow = 5,
  categoryCardType = "card3",
  uniqueSliderClass = "",
}) => {
  const UNIQUE_CLASS = `SectionSliderNewCategories_${ncNanoId(
    uniqueSliderClass
  )}`;

  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    perView: itemPerRow,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: itemPerRow - 1,
      },
      1024: {
        gap: 24,
        perView: itemPerRow - 2,
      },
      768: {
        gap: 20,
        perView: itemPerRow - 2,
      },
      640: {
        gap: 20,
        perView: itemPerRow - 3,
      },
      500: {
        gap: 20,
        perView: 1.3,
      },
    },
  });

  useEffect(() => {
    if (!MY_GLIDE) return;
    MY_GLIDE.mount();
  }, [MY_GLIDE]);

  const renderCard = (item: TaxonomyType, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;
    switch (categoryCardType) {
      case "card1":
        return <CardCategory1 taxonomy={item} />;
      case "card2":
        return <CardCategory2 index={topIndex} taxonomy={item} />;
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 index={topIndex} taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track pb-10" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
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

export default SectionSliderNewCategories;
