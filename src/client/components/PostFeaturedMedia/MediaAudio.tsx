import React, { FC } from "react";
import { PostDataType } from "data/types";

export interface MediaAudioProps {
  post: PostDataType;
}

const MediaAudio: FC<MediaAudioProps> = ({ post }) => {
  return (
    <div>
      Media Audio
    </div>  
  );
};

export default MediaAudio;
