import React, { FC, useEffect, useRef } from "react";
import NcModal from "components/NcModal/NcModal";
import SingleCommentForm from "containers/PageSingle/SingleCommentForm";
import { CommentType } from "./CommentCard";

export interface ModalEditCommentProps {
  comment: CommentType;
  show: boolean;
  onCloseModalEditComment: () => void;
}

const ModalEditComment: FC<ModalEditCommentProps> = ({
  comment,
  show,
  onCloseModalEditComment,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
          (element as HTMLTextAreaElement).setSelectionRange(
            (element as HTMLTextAreaElement).value.length,
            (element as HTMLTextAreaElement).value.length
          );
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <SingleCommentForm
        className="mt-0"
        onClickCancel={onCloseModalEditComment}
        onClickSubmit={() => console.log((textareaRef.current as any).value)}
        defaultValue={comment.content}
        textareaRef={textareaRef}
        rows={8}
      />
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalEditComment}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="Editing comment"
    />
  );
};

export default ModalEditComment;
