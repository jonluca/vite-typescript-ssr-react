import React, { FC } from "react";

export interface SingleTitleProps {
  title: string;
  className?: string;
  mainClass?: string;
}

const SingleTitle: FC<SingleTitleProps> = ({
  mainClass = "text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100",
  className = "",
  title,
}) => {
  return (
    <h1 className={className + " " + mainClass + " max-w-4xl "} title={title}>
      {title}
    </h1>
  );
};

export default SingleTitle;
