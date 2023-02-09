import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "components/Button/ButtonPrimary";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
          supper change your planning powers
        </span>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
          Become an author and share your great stories
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          Become an author you can earn extra income by writing articles. Read
          and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <ButtonPrimary className="mt-8">Become an author</ButtonPrimary>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
