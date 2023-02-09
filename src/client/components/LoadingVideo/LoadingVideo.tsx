import React, { FC } from "react";

export interface LoadingVideoProps {
  className?: string;
  chilClassName?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({
  className = "",
  chilClassName = "bg-white",
}) => {
  return (
    <div
      className={`nc-LoadingVideo lds-ellipsis ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
    </div>
  );
};

export default LoadingVideo;
