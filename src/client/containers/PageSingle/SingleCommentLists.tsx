import React, { FC } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CommentCard, { CommentType } from "components/CommentCard/CommentCard";

export interface SingleCommentListsProps {
  comments: CommentType[];
}

const SingleCommentLists: FC<SingleCommentListsProps> = ({ comments }) => {
  let cmtLv1 = comments.filter((item) => !item.parentId);

  const renderCommentItemChild = (comment: CommentType) => {
    return (
      <li key={comment.id}>
        <CommentCard size="normal" comment={comment} />
        {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-9">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )}
      </li>
    );
  };

  const renderCommentItem = (comment: CommentType) => {
    return (
      <li key={comment.id}>
        <CommentCard comment={comment} />
        {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-11">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="nc-SingleCommentLists space-y-5">
      {cmtLv1.map(renderCommentItem)}
      <ButtonPrimary className="dark:bg-primary-700 w-full">
        View full comments (+117 comments)
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
