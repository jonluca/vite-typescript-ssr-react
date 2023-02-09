import Glide from "@glidejs/glide";
import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import ncNanoId from "utils/ncNanoId";

export interface GallerySliderProps {
  galleryImgs: string[];
  uniqueClass: string;
  href: string;
}

const GallerySlider: FC<GallerySliderProps> = ({
  galleryImgs,
  uniqueClass,
  href,
}) => {
  const UNIQUE_CLASS = "gallerySlider_" + ncNanoId(uniqueClass);

  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    gap: 0,
    perView: 1,
  });

  useEffect(() => {
    MY_GLIDE.mount();
  }, [MY_GLIDE, galleryImgs]);

  return (
    <div className={`${UNIQUE_CLASS} group relative z-10 w-full h-full`}>
      <div className="glide__track h-full" data-glide-el="track">
        <ul className="glide__slides h-full">
          {galleryImgs.map((item, index) => (
            <li className="glide__slide h-full" key={index}>
              <Link to={href}>
                <NcImage src={item} containerClassName="w-full h-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 transform -translate-y-1/2 ">
        <NextPrev
          onlyPrev
          btnClassName="w-8 h-8"
          onClickPrev={(e) => e.preventDefault()}
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 transform -translate-y-1/2 ">
        <NextPrev
          onlyNext
          btnClassName="w-8 h-8"
          onClickNext={(e) => e.preventDefault()}
        />
      </div>
      {/*  */}
      <div className="absolute w-full left-0 bottom-0 h-8 bg-gradient-to-t from-neutral-700"></div>
      <div
        className="absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets"
        data-glide-el="controls[nav]"
      >
        {galleryImgs.map((_, index) => (
          <button
            key={index}
            className="glide__bullet w-1.5 h-1.5 bg-neutral-200 bg-opacity-70 rounded-full mx-0.5"
            data-glide-dir={`=${index}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
