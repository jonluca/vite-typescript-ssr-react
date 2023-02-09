import React, { FC, ReactNode, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcModal from "components/NcModal/NcModal";
import { PlayIcon } from "@heroicons/react/outline";

export interface SectionHero2Props {
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  href: string;
  youtubeID: string;
}
const SectionHero2: FC<SectionHero2Props> = ({
  heading,
  subHeading,
  rightImg,
  href,
  youtubeID,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const renderOpenModalVideo = () => {
    return (
      <ButtonSecondary onClick={() => setShowVideo(!showVideo)}>
        Play video
        <PlayIcon className="w-5 h-5 ml-2" />
      </ButtonSecondary>
    );
  };

  const renderVideoModalContent = () => {
    return (
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="ncblog hero video"
        ></iframe>
      </div>
    );
  };

  return (
    <div className="relative pb-20 md:py-32 lg:py-60 bg-black">
      <div className="flex w-full mb-10 md:w-1/2 xl:w-3/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:mb-0">
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-40 from-black bg-gradient-to-r"></div>
        <img className="w-full h-full object-cover" src={rightImg} alt="" />
      </div>
      <div className="container relative z-10 text-neutral-100">
        <div className="max-w-3xl">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl mt-3 md:!leading-[110%] ">
            {heading}
          </h1>
          <p className="mt-7 text-base lg:text-xl text-neutral-300 ">
            {subHeading}
          </p>
          <div className="flex space-x-4 mt-11">
            <ButtonPrimary href={href}>Read more</ButtonPrimary>

            <NcModal
              isOpenProp={showVideo}
              onCloseModal={() => setShowVideo(false)}
              contentExtraClass="max-w-screen-lg 2xl:max-w-screen-xl"
              contentPaddingClass=""
              renderContent={renderVideoModalContent}
              renderTrigger={renderOpenModalVideo}
              modalTitle=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
