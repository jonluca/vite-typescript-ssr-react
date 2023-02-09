import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface PostLikeState {
  recentLiked: (string | number)[];
  recentRemoved: (string | number)[];
}

const initialState: PostLikeState = {
  recentLiked: [],
  recentRemoved: [],
};

export const postLikeSlice = createSlice({
  name: "postLike",
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
  postLikeSlice.actions;

export const selectRecentLikeds = (state: RootState) =>
  state.postLike.recentLiked;
export const selectRecentRemoveds = (state: RootState) =>
  state.postLike.recentRemoved;
export default postLikeSlice.reducer;
