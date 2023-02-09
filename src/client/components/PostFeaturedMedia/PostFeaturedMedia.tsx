import React, { FC, useRef } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

export interface PostFeaturedMediaProps {
  className?: string;
  post: PostDataType;
  isHover?: boolean;
}

// CHECK FOR VIDEO CARD ON VIEW
let PREV_RATIO = 0.0;

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = " w-full h-full ",
  post,
  isHover = false,
}) => {
  const { featuredImage, postType, videoUrl, galleryImgs, audioUrl, id, href } =
    post;

  const videoRef = useRef(null);

  let IS_MOBILE = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    IS_MOBILE = true;
  }
  const cardIntersectionObserver = useIntersectionObserver(videoRef, {
    freezeOnceVisible: false,
    threshold: 0.8,
    rootMargin: "10px",
  });
  const IN_VIEW =
    (cardIntersectionObserver?.intersectionRatio || -1) > PREV_RATIO;
  PREV_RATIO = cardIntersectionObserver?.intersectionRatio || 0;

  const isPostMedia = () => postType === "video" || postType === "audio";

  const renderGallerySlider = () => {
    if (!galleryImgs) return null;
    return (
      <GallerySlider
        href={href}
        galleryImgs={galleryImgs}
        uniqueClass={`PostFeaturedGallery_${id}`}
      />
    );
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (
      postType === "video" &&
      !!videoUrl &&
      (!IS_MOBILE ? isHover : !!IN_VIEW)
    ) {
      return <MediaVideo isHover videoUrl={videoUrl} />;
    }

    // AUDIO
    if (postType === "audio" && !!audioUrl) {
      return <MediaAudio post={post} />;
    }

    // ICON
    return (
      <Link to={href} className="block absolute inset-0">
        {isPostMedia() && (
          <span className="absolute inset-0 flex items-center justify-center ">
            <PostTypeFeaturedIcon
              className="hover:scale-105 transform cursor-pointer transition-transform"
              postType={postType}
            />
          </span>
        )}
      </Link>
    );
  };

  return (
    <div
      className={`nc-PostFeaturedMedia relative ${className}`}
      data-nc-id="PostFeaturedMedia"
      ref={videoRef}
    >
      <NcImage containerClassName="absolute inset-0" src={featuredImage} />
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
