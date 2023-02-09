import React, { FC } from "react";
import imgAdsDef from "images/ads.png";

export interface SectionAdsProps {
  className?: string;
  imgAds?: string;
}

const SectionAds: FC<SectionAdsProps> = ({
  className = "",
  imgAds = imgAdsDef,
}) => {
  return (
    <a
      href="/#"
      className={`nc-SectionAds block text-center mx-auto ${className}`}
    >
      <span className="text-xs text-neutral-500">- Advertisement -</span>
      <img className="mx-auto" src={imgAds} alt="" />
    </a>
  );
};

export default SectionAds;
