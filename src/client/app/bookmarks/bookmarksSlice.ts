import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface BookmarkState {
  recentSaved: (string | number)[];
  recentRemoved: (string | number)[];
}

const initialState: BookmarkState = {
  recentSaved: [],
  recentRemoved: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addNewSavedByPostId: (state, action: PayloadAction<string | number>) => {
      state = {
        ...state,
        recentSaved: [...state.recentSaved, action.payload],
        recentRemoved: state.recentRemoved.filter(
          (item) => item !== action.payload
        ),
      };
      return state;
    },
    removeSavedByPostId: (state, action: PayloadAction<string | number>) => {
      state = {
        ...state,
        recentRemoved: [...state.recentSaved, action.payload],
        recentSaved: state.recentSaved.filter(
          (item) => item !== action.payload
        ),
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewSavedByPostId, removeSavedByPostId } =
  bookmarkSlice.actions;

export const selectRecentSaveds = (state: RootState) =>
  state.bookmark.recentSaved;
export const selectRecentRemoveds = (state: RootState) =>
  state.bookmark.recentRemoved;
export default bookmarkSlice.reducer;
