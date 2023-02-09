import React, { FC } from "react";

export interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <span
      className={`nc-Skeleton bg-neutral-400 inline-flex ${className}`}
      data-nc-id="Skeleton"
    ></span>
  );
};

export default Skeleton;
