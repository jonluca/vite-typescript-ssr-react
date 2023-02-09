import Heading from "components/Heading/Heading";
import NcImage from "components/NcImage/NcImage";
import NcPlayIcon from "components/NcPlayIcon/NcPlayIcon";
import NcPlayIcon2 from "components/NcPlayIcon2/NcPlayIcon2";
import { VideoType } from "data/types";
import React, { FC, Fragment, useState } from "react";
import ReactPlayer from "react-player";
import isSafariBrowser from "utils/isSafariBrowser";

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "iItiK76LJPY",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  },
  {
    id: "a5V6gdu5ih8",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "MuB7HHeuNbc",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80",
  },
  {
    id: "eEaZvEZye84",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80",
  },
  {
    id: "YK4u38DDlJY",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://images.unsplash.com/photo-1576359877473-d92bc837facc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];

    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden 
        border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0"
        title={video.title}
      >
        {isSafariBrowser() ? (
          <Fragment>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id}`}
              style={{
                opacity: isPlay ? 1 : 0,
                display: isPlay ? "block" : "none",
              }}
              playing={isPlay}
              controls
              width="100%"
              height="100%"
            />
            {!isPlay && (
              <Fragment>
                <div
                  onClick={() => setIsPlay(true)}
                  className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
                >
                  <NcPlayIcon />
                </div>
                <NcImage
                  containerClassName="absolute inset-0 "
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300"
                  src={video.thumbnail}
                  title={video.title}
                  alt={video.title}
                />
              </Fragment>
            )}
          </Fragment>
        ) : (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.id}`}
            playing={true}
            controls
            width="100%"
            height="100%"
            light={video.thumbnail}
            playIcon={<NcPlayIcon />}
          />
        )}
      </div>
    );
  };

  const renderSubVideo = (video: VideoType, index: number) => {
    if (index === currentVideo) return null;
    return (
      <div
        className="group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9 z-0"
        onClick={() => {
          setCurrentVideo(index);
          !isPlay && setIsPlay(true);
        }}
        title={video.title}
        key={String(index)}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <NcPlayIcon2 />
        </div>
        <NcImage
          containerClassName="absolute inset-0 w-full h-full"
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300"
          src={video.thumbnail}
          title={video.title}
          alt={video.title}
        />
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="  Check out our hottest videos. View more and share more new
          perspectives on just about any topic. Everyone’s welcome."
      >
        🎬 The Videos
      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
        <div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          {videos.map(renderSubVideo)}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
