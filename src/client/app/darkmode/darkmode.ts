import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toogleDarkMode: (state) => ({ isDarkMode: !state.isDarkMode }),
    enableDarkMode: () => ({ isDarkMode: true }),
    disableDarkMode: () => ({ isDarkMode: false }),
  },
});

export const { toogleDarkMode, enableDarkMode, disableDarkMode } =
  darkmodeSlice.actions;

export const selectDarkmodeState = (state: RootState) =>
  state.darkmode.isDarkMode;

export default darkmodeSlice.reducer;
