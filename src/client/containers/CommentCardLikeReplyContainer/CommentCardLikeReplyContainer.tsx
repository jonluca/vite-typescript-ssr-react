import { useAppDispatch, useAppSelector } from "app/hooks";
import { CommentType } from "components/CommentCard/CommentCard";
import {
  selectCommentRecentLikeds,
  selectCommentRecentRemoveds,
  removeLikedByPostId,
  addNewLikedByPostId,
} from "app/commentLikes/commentLikes";
import CommentCardLikeReply, {
  CommentCardLikeReplyProps,
} from "components/CommentCardLikeReply/CommentCardLikeReply";
import React, { FC } from "react";

export interface CommentCardLikeReplyContainerProps
  extends Pick<CommentCardLikeReplyProps, "onClickReply"> {
  className?: string;
  comment: CommentType;
}

const CommentCardLikeReplyContainer: FC<CommentCardLikeReplyContainerProps> = ({
  className = "",
  comment,
  ...args
}) => {
  const { like, id } = comment;

  const recentLikeds = useAppSelector(selectCommentRecentLikeds);
  const recentRemoveds = useAppSelector(selectCommentRecentRemoveds);
  const dispatch = useAppDispatch();

  const isLiked = () => {
    if (recentLikeds.includes(id)) {
      return true;
    }
    if (like.isLiked && !recentRemoveds.includes(id)) {
      return true;
    }
    return false;
  };

  const getLikeCount = (): number => {
    // Recent Liked
    if (recentLikeds.includes(id)) {
      return like.count + 1;
    }
    if (like.isLiked && recentRemoveds.includes(id)) {
      return like.count - 1;
    }
    return like.count;
  };

  const handleClickLike = () => {
    if (isLiked()) {
      dispatch(removeLikedByPostId(id));
    } else {
      dispatch(addNewLikedByPostId(id));
    }
  };

  return (
    <CommentCardLikeReply
      className={className}
      onClickLike={handleClickLike}
      commentId={id}
      isLiked={isLiked()}
      likeCount={getLikeCount()}
      {...args}
    />
  );
};

export default CommentCardLikeReplyContainer;
