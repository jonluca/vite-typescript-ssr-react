import NcBookmark, { NcBookmarkProps } from "components/NcBookmark/NcBookmark";
import React from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  addNewSavedByPostId,
  removeSavedByPostId,
  selectRecentSaveds,
  selectRecentRemoveds,
} from "app/bookmarks/bookmarksSlice";

export type BookmarkContainerProps = Omit<NcBookmarkProps, "isBookmarked"> & {
  initBookmarked: boolean;
};

const BookmarkContainer: React.FC<BookmarkContainerProps> = (props) => {
  const { postId, initBookmarked } = props;
  const recentSaveds = useAppSelector(selectRecentSaveds);
  const recentRemoveds = useAppSelector(selectRecentRemoveds);
  const dispatch = useAppDispatch();
  const isBookmarked = () => {
    if (recentSaveds.includes(postId)) {
      return true;
    }
    if (initBookmarked && !recentRemoveds.includes(postId)) {
      return true;
    }
    return false;
  };

  const handleClickBookmark = () => {
    if (isBookmarked()) {
      dispatch(removeSavedByPostId(postId));
    } else {
      dispatch(addNewSavedByPostId(postId));
    }
  };

  return (
    <NcBookmark
      onClick={handleClickBookmark}
      isBookmarked={isBookmarked()}
      {...props}
    />
  );
};

export default BookmarkContainer;
