import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface CommentLikeState {
  recentLiked: (string | number)[];
  recentRemoved: (string | number)[];
}

const initialState: CommentLikeState = {
  recentLiked: [],
  recentRemoved: [],
};

export const commentLikeSlice = createSlice({
  name: "commentLike",
  initialState,
  reducers: {
    addNewLikedByPostId: (state, action: PayloadAction<string | number>) => {
      state = {
        ...state,
        recentLiked: [...state.recentLiked, action.payload],
        recentRemoved: state.recentRemoved.filter(
          (item) => item !== action.payload
        ),
      };
      return state;
    },
    removeLikedByPostId: (state, action: PayloadAction<string | number>) => {
      state = {
        ...state,
        recentRemoved: [...state.recentRemoved, action.payload],
        recentLiked: state.recentLiked.filter(
          (item) => item !== action.payload
        ),
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewLikedByPostId, removeLikedByPostId } =
  commentLikeSlice.actions;

export const selectCommentRecentLikeds = (state: RootState) =>
  state.commentLikes.recentLiked;
export const selectCommentRecentRemoveds = (state: RootState) =>
  state.commentLikes.recentRemoved;
export default commentLikeSlice.reducer;
