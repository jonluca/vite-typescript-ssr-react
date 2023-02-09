import React, { FC, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import NextPrev from "components/NextPrev/NextPrev";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Glide from "@glidejs/glide";
import NcImage from "components/NcImage/NcImage";
import ncNanoId from "utils/ncNanoId";

export interface ModalPhotosProps {
  imgs: string[];
  onClose: () => void;
  isOpen: boolean;
  initFocus?: number;
}

const ModalPhotos: FC<ModalPhotosProps> = ({
  imgs,
  isOpen,
  onClose,
  initFocus = 0,
}) => {
  const UNIQUE_CLASS = ncNanoId("modalPhotos-single-gallery");

  useEffect(() => {
    if (!isOpen) return;
    if (!document.querySelector(`.${UNIQUE_CLASS}`)) {
      return;
    }
    new Glide(`.${UNIQUE_CLASS}`, {
      // @ts-ignore
      direction:
        document.querySelector("html")?.getAttribute("dir") === "rtl"
          ? "rtl"
          : "ltr",
      gap: 0,
      perView: 1,
      startAt: initFocus,
    }).mount();
  }, [isOpen, initFocus]);

  const renderSlider = () => {
    return (
      <div
        className={`${UNIQUE_CLASS} modalPhotos-single-gallery group relative flex flex-col z-10 w-full h-full`}
      >
        {/*  */}
        <div
          className="controls_nav glide__bullets mt-8 mb-5"
          data-glide-el="controls[nav]"
        >
          {imgs.map((_, index) => (
            <div className=" text-center hidden" key={index}>
              <span className="text-3xl font-semibold"> {index + 1}</span>
              <span> / {imgs.length}</span>
            </div>
          ))}
        </div>
        {/*  */}

        <div
          className="glide__track max-h-full h-full relative z-50"
          data-glide-el="track"
        >
          <ul className="glide__slides h-full">
            {imgs.map((item, index) => (
              <li className="glide__slide h-full relative  " key={index}>
                <NcImage
                  src={item}
                  containerClassName="w-full h-full "
                  className="absolute object-contain w-full max-h-screen "
                />
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="xl:absolute z-20 xl:-inset-x-20 max-w-6xl my-2 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex xl:justify-between glide__arrows">
          <NextPrev
            onlyPrev
            containerClassName="mr-1.5"
            btnClassName="w-8 h-8 sm:w-10 sm:h-10 "
          />
          <NextPrev
            onlyNext
            containerClassName="ml-1.5"
            btnClassName="w-8 h-8 sm:w-10 sm:h-10 "
          />
        </div>
      </div>
    );
  };

  const renderModalPhotos = () => {
    return (
      <Dialog
        as="div"
        className="fixed inset-0 z-max overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar"
        onClose={onClose}
        open={isOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-white dark:bg-neutral-800" />
          <div className="absolute left-2 top-2 md:top-4 md:left-4 z-max">
            <ButtonClose
              iconSize="w-6 h-6"
              className=" w-11 h-11"
              onClick={onClose}
            />
          </div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block w-full max-w-5xl py-8 h-screen align-middle mx-auto">
            {renderSlider()}
          </div>
        </div>
      </Dialog>
    );
  };

  return renderModalPhotos();
};

export default ModalPhotos;
