import React, { FC } from "react";
import twFocusClass from "utils/twFocusClass";

export interface NextPrevProps {
  containerClassName?: string;
  currentPage?: number;
  totalPage?: number;
  btnClassName?: string;
  onClickNext?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickPrev?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onlyNext?: boolean;
  onlyPrev?: boolean;
}

const NextPrev: FC<NextPrevProps> = ({
  containerClassName = "",
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = "w-10 h-10",
  onlyNext = false,
  onlyPrev = false,
}) => {
  return (
    <div
      className={`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${containerClassName}`}
      data-nc-id="NextPrev"
      data-glide-el="controls"
    >
      {!onlyNext && (
        <button
          className={`${btnClassName} ${
            !onlyPrev ? "mr-[6px]" : ""
          } bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
          onClick={onClickPrev}
          title="Prev"
          data-glide-dir="<"
        >
          <i className="las la-angle-left"></i>
        </button>
      )}
      {!onlyPrev && (
        <button
          className={`${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
          onClick={onClickNext}
          title="Next"
          data-glide-dir=">"
        >
          <i className="las la-angle-right"></i>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
