import NextPrev from "components/NextPrev/NextPrev";
import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
}

const TitleHeading: React.FC<HeadingProps> = ({
  children,
  desc = "Discover the most outstanding articles in all topics of life. ",
  className = "mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",
  isCenter = true,
  hasNextPrev = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto " : "max-w-2xl"
        }
      >
        <h2 className={`text-3xl md:text-5xl font-semibold`} {...args}>
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <NextPrev onClickNext={() => {}} onClickPrev={() => {}} />
        </div>
      )}
    </div>
  );
};

export default TitleHeading;
