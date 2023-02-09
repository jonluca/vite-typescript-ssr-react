import React, { FC } from "react";

export interface NcPlayIcon2Props {
  className?: string;
  iconClass?: string;
}

const NcPlayIcon2: FC<NcPlayIcon2Props> = ({
  className = "w-8 h-8 md:w-10 md:h-10",
  iconClass = "w-5 h-5",
}) => {
  return (
    <div
      className={`nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${className}`}
      data-nc-id="NcPlayIcon2"
    >
      <span className="absolute inset-0 flex items-center justify-center text-primary-500">
        <svg
          className={iconClass}
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default NcPlayIcon2;
